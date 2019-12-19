import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './profile/customStyle.css';
import { useHistory, Redirect } from 'react-router-dom';
const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [show, toggleShow] = useState(false);

  const gitHub = [];
  const FetchButton = () => {
    axios
      .get(`https://api.github.com/users/${localStorage.getItem('username')}/repos`)
      .then(result => {
        setRepos(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const ImportButton = () => {
    axios.post(
      `http://localhost:5000/user/github/${localStorage.getItem('ID')}`,
      {
        gitHub,
      },
      {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
          'Content-Type': 'application/json',
        },
      },
    );
  };
  const handleFetchClick = () => {
    FetchButton();
    toggleShow(!show);
  };
  let history = useHistory();
  const handleClick = () => {
    history.push('/auth/portfolio');
  };
  return (
    <div>
      <div className="profileHeader">
        <div className="subTitle">Take your second step!</div>
        <div className="title">Create your portfolio</div>
        <div className="theSteps">
          <div className="steps">
            <img className="iconNumber" src="https://i.ibb.co/9g9Yp53/Component-19-1.png" />

            <div className="signUpText">Import your projects</div>
            <p className="paraTitle">Retrieve your repositories from GitHub </p>
            <button className="btn-github" type="submit" onClick={handleFetchClick}>
              <span>
                <img src="https://i.ibb.co/6bKCfPT/Octicons-mark-github.png" />
                <span className="importTitle">GitHub import</span>
              </span>
            </button>
          </div>
          <div className="steps">
            <img className="iconNumber" src="https://i.ibb.co/cknNkS2/Component-20-1.png" />

            <div className="signUpText">Edit & customize your projects</div>
            <p className="paraTitle">Edit your projects details to showcase it</p>

            <a href="/auth/portfolio">
              <button className="editButton" type="submit">
                Edit
              </button>
            </a>
          </div>
        </div>
        {show && <div className="titleMin">Select the repositories you want to import</div>}
        {show && (
          <div className="repoWrapper">
            {repos.map(function(item) {
              const title = item.name;
              const description = item.description;
              const repository = item.html_url;
              const handleGithubChange = () => {
                gitHub.push({ title, description, repository });
              };

              return (
                <div>
                  <form>
                    <div className="repoContainer">
                      <input type="checkbox" className="checkRepo" onChange={handleGithubChange} />
                      <p className="repoTitle">{title}</p>
                    </div>
                  </form>
                </div>
              );
            })}
          </div>
        )}
        <form
          onSubmit={event => {
            event.preventDefault();
            ImportButton();
            handleClick();
            console.log(gitHub);
          }}
        >
          {show && <input type="submit" className="importGithubBtn" value="import" />}
        </form>

      </div>
    </div>
  );
};
export default Projects;
