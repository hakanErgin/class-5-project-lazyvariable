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
        .then(response => response)
        .catch(err => err);
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
      return error;
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
      .then(response => response)
      .catch(err => err);
  };

  const handlePersonalInputChange = (event, type) => {
    event.persist();
    const { name, value } = event.target;

    setInputs({
      ...inputs,
      [type]: { ...inputs[type], ...inputs[type][0], [name]: value }
    });
  };

  const handleSkillsInputChange = (event, type) => {
    event.persist();
    const { name, value } = event.target;

    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleInputChange = (event, type) => {
    event.persist();
    const { name, value } = event.target;

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
      .catch(err => err);
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
    handlePersonalInputChange,
    handleSkillsInputChange
  };
};

export default useSignUpForm;
