import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import useSignUpForm from './InputHooks';

import Personal from './personal';
import Experience from './experience';
import Education from './education';
// import Projects from './projects' // in this case maybe we can leave this out?
import Skills from './skills';

import { Menu } from 'antd';
import 'antd/dist/antd.css';

const Dashboard = () => {
  function handleClick(e) {
    console.log('click', e);
  }

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm({
    title: '',
    about: '',
    email: '',
    telephone: '',
    city: '',
    country: '',
  });

  return (
    <Router>
      <div>
        <Menu defaultSelectedKeys="1" onClick={handleClick} mode="horizontal">
          <Menu.Item key="1">
            <Link to="/nav/dashboard/personal">Personal Info</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/nav/dashboard/experience">Experience</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/nav/dashboard/education">Education</Link>
          </Menu.Item>
          {/* <Menu.Item><Link to="/nav/dashboard/projects">Projects</Link></Menu.Item> */}
          <Menu.Item key="4">
            <Link to="/nav/dashboard/skills">Skills</Link>
          </Menu.Item>
        </Menu>
        <Switch>
          <Route path="/nav/dashboard/personal">
            <Personal />
          </Route>
          <Route path="/nav/dashboard/experience">
            <Experience />
          </Route>
          <Route path="/nav/dashboard/education">
            <Education />
          </Route>
          {/* <Route path="/nav/dashboard/projects"><Projects /></Route> */}
          <Route path="/nav/dashboard/skills">
            <Skills />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Dashboard;
