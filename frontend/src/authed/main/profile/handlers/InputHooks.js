import { useState, useEffect } from 'react';
import axios from 'axios';

import REACT_APP_BACKEND_URI from '../../../../helpers/herokuHelper';

const useSignUpForm = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
      axios
        .post(
          `${REACT_APP_BACKEND_URI}/user/${localStorage.getItem('ID')}`,
          inputs,
          {
            headers: {
              'x-auth-token': localStorage.getItem('token'),
              'Content-Type': 'application/json'
            }
          }
        )
        .then(response => console.log('response', response))
        .catch(err => {
          console.log(err);
        });
      window.location.href = `/auth/projects`;
    }
  };

  const CheckDb = async () => {
    try {
      const res = await fetch(
        `${REACT_APP_BACKEND_URI}/user/${localStorage.getItem('ID')}`
      );
      const jsonResponse = await res.json();
      await setInputs({ ...jsonResponse });
      return jsonResponse;
    } catch (error) {
      console.log(error);
      setInputs({});
    }
  };

  useEffect(() => {
    CheckDb();
  }, []);

  const postToGithub = data => {
    axios
      .post(
        `${REACT_APP_BACKEND_URI}/user/github/${localStorage.getItem('ID')}`,
        { gitHub: data },
        {
          headers: {
            'x-auth-token': localStorage.getItem('token'),
            'Content-Type': 'application/json'
          }
        }
      )
      .then(response => console.log('response', response.config.data))
      .catch(err => {
        console.log(err);
      });
  };

  const handlePersonalInputChange = (event, type) => {
    event.persist();
    const { name, value } = event.target;
    console.log('name', name, 'value', value, 'type:', type);

    setInputs({
      ...inputs,
      [type]: { ...inputs[type], ...inputs[type][0], [name]: value }
    });
  };

  const handleInputChange = (event, type) => {
    event.persist();
    const { name, value } = event.target;
    console.log('name', name, 'value', value, 'type:', type);

    setInputs({
      ...inputs,
      [type]: [
        {
          ...inputs[type][0],
          [name]: value
        }
      ]
    });
  };

  function onDateChange(date, experienceDate, type) {
    console.log('date', date, 'experienceDate', experienceDate, 'type', type);
    const startDate = experienceDate[0];
    const endDate = experienceDate[1];

    setInputs({
      ...inputs,
      [type]: [
        {
          ...inputs[type][0],
          startDate,
          endDate
        }
      ]
    });
  }

  const [name, setName] = useState();
  const [avatar, setAvatar] = useState();

  function setPicAndName() {
    axios
      .get(`https://api.github.com/users/${localStorage.getItem('username')}`)
      .then(result => {
        setName(result.data.name);
        setAvatar(result.data.avatar_url);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    onDateChange,
    CheckDb,
    setInputs,
    postToGithub,
    name,
    avatar,
    setPicAndName,
    handlePersonalInputChange
  };
};

export default useSignUpForm;
