import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './profile/customStyle.css';

const Projects = () => {
  return (
    <div>
      <div className="profileHeader">
        <div className="subTitle">Take your second step!</div>
        <div className="title">Create your portfolio</div>
      </div>
      <div className="customStyle">
        <a href="/auth/github">
          <button className="btn-github" type="submit">
            <span>
              <img src="https://i.ibb.co/6bKCfPT/Octicons-mark-github.png" />
              <span className="importTitle">GitHub import</span>
            </span>
          </button>
        </a>
        <Link to="/auth/portfolio">
          <button>Edit your repos</button>
        </Link>
      </div>
    </div>
  );
};
export default Projects;
