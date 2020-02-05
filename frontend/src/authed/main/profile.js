import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  withRouter
} from 'react-router-dom'; //needs Router

import useSignUpForm from './profile/handlers/InputHooks';

import Personal from './profile/personal';
import Experience from './profile/experience';
import Education from './profile/education';
import Skills from './profile/skills';
import { Menu } from 'antd';
import 'antd/dist/antd.css';

import { Layout, Button } from 'antd';

const { Footer } = Layout;

const Profile = () => {
  function handleClick(e) {
    setActiveTab(e.key);
  }

  const {
    inputs,
    handlePersonalInputChange,
    handleInputChange,
    handleSubmit,
    onDateChange
  } = useSignUpForm();
  console.log('inputs from profile', inputs);

  const history = useHistory();
  const [activeTab, setActiveTab] = useState('1');
  const [buttonText, setButtonText] = useState('Next');

  function nextHandler(e) {
    switch (activeTab) {
      case '1':
        setActiveTab('2');
        history.push('/auth/profile/experience');
        setButtonText('Next');
        break;
      case '2':
        setActiveTab('3');
        history.push('/auth/profile/education');
        setButtonText('Next');
        break;
      case '3':
        setActiveTab('4');
        history.push('/auth/profile/skills');
        setButtonText('Submit');
        break;
      case '4':
        setActiveTab('1');
        handleSubmit(e);
        break;
      default:
        setActiveTab('1');
        setButtonText('Next');
        break;
    }
  }

  return (
    <div>
      <div>
        <div className="profileHeader">
          <div className="subTitle">Take your first step!</div>
          <div className="title">Create your resume</div>
        </div>
        <Menu selectedKeys={activeTab} onClick={handleClick} mode="horizontal">
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
              inputs={inputs.personalFields}
              handleInputChange={handlePersonalInputChange}
            />
          </Route>
          <Route path="/auth/profile/experience">
            <Experience
              inputs={inputs.experienceFields}
              handleInputChange={handleInputChange}
              onDateChange={onDateChange}
            />
          </Route>
          <Route path="/auth/profile/education">
            <Education
              inputs={inputs.educationFields}
              handleInputChange={handleInputChange}
              onDateChange={onDateChange}
            />
          </Route>
          <Route path="/auth/profile/skills">
            <Skills
              inputs={inputs.skills}
              handleInputChange={handleInputChange}
            />
          </Route>
        </Switch>
      </div>
      <Footer
        style={{ bottom: 0, position: 'fixed', width: '100%', padding: 10 }}
      >
        <Button onClick={nextHandler}>{buttonText}</Button>
      </Footer>
    </div>
  );
};

// export default Profile
export default withRouter(Profile);
