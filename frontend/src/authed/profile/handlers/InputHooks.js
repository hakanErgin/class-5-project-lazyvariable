import React, { useState, useEffect, useRef } from 'react'; // removed React from here just to get rid of warnings

require('dotenv').config()


const useSignUpForm = (initialValues, callback) => {
  const [inputs, setInputs] = useState({});
  const ref = useRef(inputs); //we are using useRef for state to update itself each time we enter data and click next on dashboard

  useEffect(() => {
    //we use useEffect to update itself each time our state(inputs) changes
    ref.current = inputs;
  }, [inputs]);

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
      //event.persist();
      console.log('last values', ref, inputs);
      callback();
      window.location.href = 'http://localhost:3000/auth/projects';
    }
  };

  const useFetch = url => {
    const [response, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
      const FetchData = async () => {
        try {
          const res = await fetch(url);
          const json = await res.json();
          setResponse(json);
        } catch (error) {
          setError(error);
        }
      };
      FetchData();
    }, [url]);
    return { response, error };
  };

  React.useEffect(() => {
    const CheckDb = async () => {
      try {
        const res = await useFetch(`${process.env.HEROKU_URI}/user/${localStorage.getItem('ID')}`);
        setInputs({
          name: res.response.name,
          about: res.response.about,
          phone: res.response.phone,
          country: res.response.country,
          city: res.response.city,
          website: res.response.website,
          email_: res.response.email_,
          workTitle: res.response.workTitle,
          companyName: res.response.companyName,
          companyLocation: res.response.companyLocation,
          employmentType: res.response.employmentType,
          jobDescription: res.response.jobDescription,
          institution: res.response.institution,
          experienceDate: res.response.experienceDate,
          degree: res.response.degree,
          fieldOfStudy: res.response.fieldOfStudy,
          educationDescription: res.response.educationDescription,
          skills: res.response.skills,
        });
      } catch (error) {
        console.log(error);
        setInputs({
          name: '',
          about: '',
          phone: '',
          email_: '',
          country: '',
          city: '',
          website: '',
          workTitle: '',
          companyName: '',
          companyLocation: '',
          employmentType: '',
          jobDescription: '',
          institution: '',
          experienceDate: '',
          degree: '',
          fieldOfStudy: '',
          educationDescription: '',
          skills: '',
        });
      }
    };
    CheckDb();
  }, []);

  const handleInputChange = event => {
    event.persist();

    //setInputs(ref => ({ ...ref, [event.target.name]: event.target.value }));

    const { name, value } = event.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));

    console.log('changed inputs', inputs);
  };

  const handleInputChangeCascade = (value, selectedOptions) => {
    //setInputs(ref => ({ ...ref, [event.target.name]: event.target.value }));
    console.log(value, selectedOptions);
    const empType = selectedOptions[0];

    //const { value, selectedOptions } = event.target;
    setInputs(inputs => ({ ...inputs, empType }));

    console.log('changed inputs', inputs);
  };

  function onEduDateChange(date, educationDate) {
    console.log(date, educationDate);
    const educationStartDate = educationDate[0];
    const educationEndDate = educationDate[1];

    setInputs(inputs => ({ ...inputs, educationStartDate }));
    setInputs(inputs => ({ ...inputs, educationEndDate }));
  }

  function onExpDateChange(date, experienceDate) {
    console.log(date, experienceDate);
    const workStartDate = experienceDate[0];
    const workEndDate = experienceDate[1];

    setInputs(inputs => ({ ...inputs, workStartDate }));
    setInputs(inputs => ({ ...inputs, workEndDate }));
  }

  return {
    handleSubmit,
    handleInputChange,
    handleInputChangeCascade,
    inputs,
    ref,
    onEduDateChange,
    onExpDateChange,
  };
};

export default useSignUpForm;
