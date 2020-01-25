import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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

  const {
    inputs,
    handleInputChange,
    handleInputChangeCascade,
    handleSubmit,
    onEduDateChange,
    onExpDateChange
  } = useSignUpForm();

  console.log('inputs', inputs);

  return (
    <Router>
      <div>
        <div className="profileHeader">
          <div className="subTitle">Take your first step!</div>
          <div className="title">Create your resume</div>
        </div>
        <Menu defaultSelectedKeys="1" onClick={handleClick} mode="horizontal">
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
            <Personal inputs={inputs} handleInputChange={handleInputChange} />
          </Route>
          <Route path="/auth/profile/experience">
            <Experience
              inputs={inputs}
              handleInputChange={handleInputChange}
              onExpDateChange={onExpDateChange}
            />
          </Route>
          <Route path="/auth/profile/education">
            <Education
              inputs={inputs}
              handleInputChange={handleInputChange}
              onEduDateChange={onEduDateChange}
            />
          </Route>
          <Route path="/auth/profile/skills">
            <Skills
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
