import React from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Projects from './projects' // in this case maybe we can leave this out?

import { Menu } from 'antd';
import 'antd/dist/antd.css';

const ResumeDashboard = () => {
  function handleClick(e) {
    console.log('click', e);
  }

  return (
    <Router>
      <div>
        <Personal />
        <Experience />
        <Education />
        <ProfileSkills />
      </div>
    </Router>
  );
};

export default ResumeDashboard;
