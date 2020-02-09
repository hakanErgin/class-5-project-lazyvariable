import React, { useState } from 'react';
import { Switch, Route, Link, useHistory, withRouter } from 'react-router-dom'; // for some reason may need BrowserRouter as Router

import useSignUpForm from './profile/handlers/InputHooks';

import Personal from './profile/personal';
import Experience from './profile/experience';
import Education from './profile/education';
import Skills from './profile/skills';
import { Menu, Typography, Button } from 'antd';
import 'antd/dist/antd.css';

const { Title } = Typography;

const Profile = () => {
  function handleClick(e) {
    setActiveTab(e.key);
  }

  const {
    inputs,
    handlePersonalInputChange,
    handleInputChange,
    handleSubmit,
    onDateChange,
    handleSkillsInputChange
  } = useSignUpForm();

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
    <div id="profileComponent">
      <div className="header">
        <Title level={1}>Profile</Title>
        <div>Take your first step! Create your resume</div>
      </div>
      <Menu
        id="profile-menu"
        selectedKeys={activeTab}
        onClick={handleClick}
        mode="horizontal"
      >
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
            handleSkillsInputChange={handleSkillsInputChange}
          />
        </Route>
      </Switch>
      <footer>
        <Button onClick={nextHandler}>{buttonText}</Button>
      </footer>
    </div>
  );
};

// export default Profile
export default withRouter(Profile);
