import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

import useSignUpForm from './dashboard/handlers/InputHooks';

import Personal from './dashboard/personal';
import Experience from './dashboard/experience';
import Education from './dashboard/education';
// import Projects from './projects' // in this case maybe we can leave this out?
import Skills from './dashboard/skills';

import { Menu } from 'antd';
import 'antd/dist/antd.css';

const Dashboard = () => {
  function handleClick(e) {
    console.log('click', e);
  }

  const handleOnclick = () => {
    //  axios.post("") //it will send data to backend/mongodb after modifying it

    axios
      .post(
        'http://localhost:5000/update/:id',
        {
          inputs,
        },
        {
          headers: {
            'x-auth-token': localStorage.getItem('token'),
            'Content-Type': 'application/json',
          },
        },
      )
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
      about: '',
      email: '',
      telephone: '',
      country: '',
      city: '',
      website: '',
      workTitle: '',
      company: '',
      location: '',
      employmentType: '',
      jobDescription: '',
      experienceDate: '',
      school: '',
      degree: '',
      fieldOfStudy: '',
      grade: '',
      educationDescription: '',
      educationDate: '',
      skills: '',
    },
    handleOnclick,
  );
  //console.log('dash inputs', inputs);

  /* useEffect(() => {
    document.title = `You clicked ${count} times`;
  }); */

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
            <Personal
              inputs={inputs}
              ref={ref}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </Route>
          <Route path="/nav/dashboard/experience">
            <Experience
              inputs={inputs}
              ref={ref}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              onDateChange={onDateChange}
            />
          </Route>
          <Route path="/nav/dashboard/education">
            <Education
              inputs={inputs}
              ref={ref}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              onDateChange={onDateChange}
            />
          </Route>
          {/* <Route path="/nav/dashboard/projects"><Projects /></Route> */}
          <Route path="/nav/dashboard/skills">
            <Skills
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

export default Dashboard;
