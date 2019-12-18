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

const Profile = () => {
  function handleClick(e) {
    console.log('click', e);
  }

  const handleOnclick = () => {
    //  axios.post("") //it will send data to backend/mongodb after modifying it
    console.log('ref', ref);
    axios
      .post(`http://localhost:5000/user/${localStorage.getItem('ID')}`, inputs, {
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

  const { ref, inputs, handleInputChange, handleSubmit, onDateChange } = useSignUpForm(
    {
      name: '',
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
    },
    handleOnclick,
  );

  //console.log('dash inputs', inputs);

  /* useEffect(() => {
    document.title = `You clicked ${count} times`;
  }); */

  const [selected, setSelected] = useState('1');

  return (
    <Router>
      <div>
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
              ref={ref}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </Route>
          <Route path="/auth/profile/experience">
            <Experience
              setSelected={setSelected}
              inputs={inputs}
              ref={ref}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              onDateChange={onDateChange}
            />
          </Route>
          <Route path="/auth/profile/education">
            <Education
              setSelected={setSelected}
              inputs={inputs}
              ref={ref}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              onDateChange={onDateChange}
            />
          </Route>
          <Route path="/auth/profile/skills">
            <Skills
              setSelected={setSelected}
              inputs={inputs}
              ref={ref}
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
