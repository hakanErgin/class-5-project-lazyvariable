import React, { useState, useEffect } from 'react';
import axios from 'axios';
import REACT_APP_BACKEND_URI from '../helpers/herokuHelper';

import { Collapse, Icon } from 'antd';

const { Panel } = Collapse;
const Portfolio = ({
  setInputs,
  inputs,
  // handleInputChange,
  handleSubmit,
  CheckDb
}) => {
  useEffect(() => {
    CheckDb();
  }, []);

  console.log('inputs', inputs);
  const gitHub = inputs.gitHub;
  const [newGithub, setNewGithub] = useState([]);

  const customPanelStyle = {
    background: '#f9f9f9 0% 0% no-repeat padding-box',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
    width: 754,
    color: '#f9f9f9',
    marginTop: 40
  };

  const handleClick = () => {
    axios
      .post(
        `${REACT_APP_BACKEND_URI}/user/github/${localStorage.getItem('ID')}`,
        { gitHub: newGithub },
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
      }); // window.location.href = `/auth/preview`;
  };

  const handleInputChange = (event, repo, i) => {
    const { name, value } = event.target;

    const newValue = { [name]: value };

    const newGit = gitHub.map((git, index) => {
      if (index === i) {
        return Object.assign(git, newValue);
      } else {
        return git;
      }
    });
    // git[name] = value;
    console.log('newGit', newGit);

    setNewGithub(newGit);
    console.log('newGithub', newGithub);
  };

  return (
    <div className="profileHeader">
      <div className="titleMin">Edit your projects details</div>

      {gitHub &&
        gitHub.map((repo, i) => {
          return (
            <Collapse
              bordered={false}
              defaultActiveKey={['0']}
              expandIcon={({ isActive }) => (
                <Icon type="caret-right" rotate={isActive ? 90 : 0} />
              )}
            >
              <Panel header={repo.title} key="1" style={customPanelStyle}>
                <div className="repoDetailsContainer">
                  <form onSubmit={handleClick}>
                    <div className="repoDetailsWrapper">
                      <div className="repoField">
                        <div className="repoLabel">Name:</div>
                        <input
                          name="title"
                          className="repoInput"
                          type="text"
                          value={repo.title}
                          onChange={e => handleInputChange(e, repo.title, i)}
                        ></input>
                      </div>
                      <div className="repoField">
                        <div className="githubLabel">Repo: </div>
                        <input
                          name="repo"
                          type="text"
                          className="repoInput"
                          value={repo.repository}
                        ></input>
                      </div>
                      <div className="repoField">
                        <div className="githubLabel">Description:</div>
                        <textarea
                          name="description"
                          className="repoInputDescription"
                          cols="50"
                          rows="10"
                          value={repo.description}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                    </div>
                    <input
                      type="submit"
                      className="repoSaveButton"
                      value="save"
                    />
                  </form>
                </div>
              </Panel>
            </Collapse>
          );
        })}
      <form
        onSubmit={event => {
          event.preventDefault();
          handleClick();
        }}
      >
        <input type="submit" className="submitPortfolio" value="Submit" />
      </form>
    </div>
  );
};

export default Portfolio;
