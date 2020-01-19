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

import BACKEND_URI from '../helpers/herokuHelper'

const Profile = () => {

  function handleClick(e) {
    console.log('click', e);
  }
  const handleOnclick = () => {
    axios
      .post(`${BACKEND_URI}/user/${localStorage.getItem('ID')}`, inputs, {
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
  } = useSignUpForm(handleOnclick);

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
