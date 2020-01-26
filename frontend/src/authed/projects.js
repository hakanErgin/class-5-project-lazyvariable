import React, { useState } from 'react';
import REACT_APP_BACKEND_URI from '../helpers/herokuHelper';

import axios from 'axios';

const Projects = ({ setInputs, inputs }) => {
  const [repos, setRepos] = useState([]);
  const [show, toggleShow] = useState(false);
  const [selectedRepos, setSelectedRepos] = useState([]);

  const FetchRepos = () => {
    axios
      .get(
        `https://api.github.com/users/${localStorage.getItem('username')}/repos`
      )
      .then(result => {
        setRepos(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleFetchClick = () => {
    FetchRepos();
    toggleShow(!show);
  };

  const handleClick = event => {
    axios
      .post(
        `${REACT_APP_BACKEND_URI}/user/github/${localStorage.getItem('ID')}`,
        { gitHub: selectedRepos },
        {
          headers: {
            'x-auth-token': localStorage.getItem('token'),
            'Content-Type': 'application/json'
          }
        }
      )
      .then(response => console.log('response', response.config.data))
      .catch(err => {
        console.log(err);
      });
    return (window.location.href = './portfolio');
  };

  const handleCheckBoxChange = (event, repo) => {
    event.persist();

    const checked = event.target.checked;

    if (checked) {
      setSelectedRepos([
        ...selectedRepos,
        {
          title: repo.name,
          description: repo.description,
          repository: repo.html_url
        }
      ]);
    } else {
      setSelectedRepos([
        selectedRepos.filter(
          rep => rep.title != repo.name && rep.description != repo.description
        )
      ]);
    }
  };

  return (
    <div>
      <div className="profileHeader">
        <div className="subTitle">Take your second step!</div>
        <div className="title">Create your portfolio</div>
        <div className="theSteps">
          <div className="steps">
            <img
              className="iconNumber"
              src="https://i.ibb.co/9g9Yp53/Component-19-1.png"
              alt="1"
            />
            <div className="signUpText">Import your projects</div>
            <p className="paraTitle">Retrieve your repositories from GitHub </p>
            <button
              className="btn-github"
              type="submit"
              onClick={handleFetchClick}
            >
              <span>
                <img
                  src="https://i.ibb.co/6bKCfPT/Octicons-mark-github.png"
                  alt="github"
                />
                <span className="importTitle">GitHub import</span>
              </span>
            </button>
          </div>
          <div className="steps">
            <img
              className="iconNumber"
              src="https://i.ibb.co/cknNkS2/Component-20-1.png"
              alt="2"
            />
            <div className="signUpText">Edit & customize your projects</div>
            <p className="paraTitle">
              Edit your projects details to showcase it
            </p>
            <a href="/auth/portfolio">
              <button className="editButton" type="submit">
                Edit
              </button>
            </a>
          </div>
        </div>
        {show && (
          <div className="titleMin">
            Select the repositories you want to import
          </div>
        )}
        {show && (
          <div className="repoWrapper">
            {repos.map(repo => {
              return (
                <div>
                  <form>
                    <div className="repoContainer">
                      <input
                        name={repo.name}
                        type="checkbox"
                        className="checkRepo"
                        onChange={e => handleCheckBoxChange(e, repo)}
                      />
                      <p className="repoTitle">{repo.name}</p>
                    </div>
                  </form>
                </div>
              );
            })}
          </div>
        )}
        {show && (
          <button
            type="button"
            className="importGithubBtn"
            value="import"
            onClick={handleClick}
          >
            Click
          </button>
        )}
      </div>
    </div>
  );
};
export default Projects;
