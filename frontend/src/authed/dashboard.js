import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Personal from './dashboard/personal';
import Experience from './dashboard/experience';
import Education from './dashboard/education';
import Skills from './dashboard/skills';

import { Menu } from 'antd';
import 'antd/dist/antd.css';

const Dashboard = () => {
  function handleClick(e) {
    console.log('click', e);
  }

  return (
    <Router>
      <div>
        <Menu defaultSelectedKeys="1" onClick={handleClick} mode="horizontal">
            <Menu.Item key="1"><Link to="/auth/dashboard/personal">Personal Info</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/auth/dashboard/experience">Experience</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/auth/dashboard/education">Education</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/auth/dashboard/skills">Skills</Link></Menu.Item>
        </Menu>
        <Switch>
          <Route path="/auth/dashboard/personal">
            <Personal />
          </Route>
          <Route path="/auth/dashboard/experience">
            <Experience />
          </Route>
          <Route path="/auth/dashboard/education">
            <Education />
          </Route>
          <Route path="/auth/dashboard/skills">
            <Skills />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Dashboard;
