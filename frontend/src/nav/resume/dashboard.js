import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Personal from '../dashboard/personal';
import Experience from '../dashboard/experience';
import Education from '../dashboard/education';
// import Projects from './projects' // in this case maybe we can leave this out?
import ProfileSkills from '../resume/skills';

import { Menu } from 'antd';
import 'antd/dist/antd.css';

const ResumeDashboard = () => {
  function handleClick(e) {
    console.log('click', e);
  }

  return (
    <Router>
      <div>
        <Menu onClick={handleClick} mode="horizontal">
          <Menu.Item>
            <Link to="/nav/profile/personal">Personal Info</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/nav/profile/experience">Experience</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/nav/profile/education">Education</Link>
          </Menu.Item>
          {/* <Menu.Item><Link to="/nav/dashboard/projects">Projects</Link></Menu.Item> */}
          <Menu.Item>
            <Link to="/nav/profile/skills">Skills</Link>
          </Menu.Item>
        </Menu>
        <Switch>
          <Route path="/nav/profile/personal">
            <Personal />
          </Route>
          <Route path="/nav/profile/experience">
            <Experience />
          </Route>
          <Route path="/nav/profile/education">
            <Education />
          </Route>
          {/* <Route path="/nav/dashboard/projects"><Projects /></Route> */}
          <Route path="/nav/profile/skills">
            <ProfileSkills />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default ResumeDashboard;
