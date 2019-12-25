import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

import useSignUpForm from './profile/handlers/InputHooks';

import Personal from './profile/personal';
import Experience from './profile/experience';
import Education from './profile/education';
import Skills from './profile/skills';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import './profile/customStyle.css';

require('dotenv').config()

/*
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
*/

const Profile = () => {
  const [initial, setInitial] = React.useState({});

  function handleClick(e) {
    console.log('click', e);
  }

  /*
  React.useEffect(() => {
    const CheckDb = async () => {
      try {
        const res = await useFetch(`http://localhost:5000/user/${localStorage.getItem('ID')}`);
        setInitial({
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
        setInitial({
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
  */

  /*
  const res = useFetch(`http://localhost:5000/user/${localStorage.getItem('ID')}`);
  let initial = {
    name: '',
    about: '',
    phone: '',
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
  };

  if (res.response) {
    initial = {
      name: res.response.name,
      about: res.response.about,
      phone: res.response.phone,
      country: res.response.country,
      city: res.response.city,
      website: res.response.website,
      email: res.response.email,
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
    };
  }
  */

  const handleOnclick = () => {
    //  axios.post("") //it will send data to backend/mongodb after modifying it
    // console.log('ref', ref);
    axios
      .post(`${process.env.HEROKU_URI}/user/${localStorage.getItem('ID')}`, inputs, {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
          'Content-Type': 'application/json',
        },
      })
      .then(e => {
        console.log(e);
      })
      .catch(err => {
        console.log(err);
      });

    //alert('Successfully saved!');
  };

  const {
    // ref,
    inputs,
    handleInputChange,
    handleInputChangeCascade,
    handleSubmit,
    onEduDateChange,
    onExpDateChange,
  } = useSignUpForm(initial, handleOnclick);

  //console.log('dash inputs', inputs);

  /* useEffect(() => {
    document.title = `You clicked ${count} times`;
  }); */

  const [selected, setSelected] = useState('1');

  return (
    <Router>
      <div>
        <div className="profileHeader">
          <div className="subTitle">Take your first step!</div>
          <div className="title">Create your resume</div>
        </div>
        <Menu defaultSelectedKeys={selected} onClick={handleClick} mode="horizontal">
          <Menu.Item key="1">
            <Link to="/auth/profile/personal">Personal Info</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/auth/profile/experience">Experience</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/auth/profile/education">Education</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/auth/profile/skills">Skills</Link>
          </Menu.Item>
        </Menu>
        <Switch>
          <Route path="/auth/profile/personal">
            <Personal
              setSelected={setSelected}
              inputs={inputs}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </Route>
          <Route path="/auth/profile/experience">
            <Experience
              setSelected={setSelected}
              inputs={inputs}
              handleInputChange={handleInputChange}
              handleInputChangeCascade={handleInputChangeCascade}
              handleSubmit={handleSubmit}
              onExpDateChange={onExpDateChange}
            />
          </Route>
          <Route path="/auth/profile/education">
            <Education
              setSelected={setSelected}
              inputs={inputs}
              handleInputChange={handleInputChange}
              handleInputChangeCascade={handleInputChangeCascade}
              handleSubmit={handleSubmit}
              onEduDateChange={onEduDateChange}
            />
          </Route>
          <Route path="/auth/profile/skills">
            <Skills
              setSelected={setSelected}
              inputs={inputs}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Profile;
