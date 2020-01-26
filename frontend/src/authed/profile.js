import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

import useSignUpForm from './profile/handlers/InputHooks';

import Personal from './profile/personal';
import Experience from './profile/experience';
import Education from './profile/education';
import Skills from './profile/skills';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import REACT_APP_BACKEND_URI from '../helpers/herokuHelper'
import { Layout, Button } from 'antd';

const { Footer } = Layout;

const Profile = () => {
  const {
    inputs,
    handleInputChange,
    handleInputChangeCascade,
    handleSubmit,
    onEduDateChange,
    onExpDateChange
  } = useSignUpForm();

  console.log('inputs', inputs);

  const history = useHistory();

  function nextHandler() {
    switch (window.location.pathname) {
      case "/auth/profile/personal":
        history.push("/auth/profile/experience");
        break;
      case "/auth/profile/experience":
        history.push("/auth/profile/education");
        break;
      case "/auth/profile/education":
        history.push("/auth/profile/skills");
        break;
      case "/auth/profile/skills":
        console.log('hola');
        break;
      default:
        return null
    }
  }

  return (
    <Router>
      <div>
        <div className="profileHeader">
          <div className="subTitle">Take your first step!</div>
          <div className="title">Create your resume</div>
        </div>
        <Menu defaultSelectedKeys="1" mode="horizontal">
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
      <Footer style={{ bottom: 0, position: "fixed", width: "100%", padding: 10 }}>
        <Button onClick={nextHandler}>Next</Button>
      </Footer>
    </Router>
  );
};

export default Profile;
