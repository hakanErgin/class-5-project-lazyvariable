import React, { useState, useEffect } from 'react';
import { Collapse, Icon } from 'antd';

const { Panel } = Collapse;

const Portfolio = ({ inputs, CheckDb, postToGithub }) => {
  useEffect(() => {
    CheckDb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    const reposToPost = newGithub.length !== 0 ? newGithub : gitHub;
    postToGithub(reposToPost);
    window.location.href = `/auth/preview`;
  };

  const handleInputChange = (event, i) => {
    const { name, value } = event.target;

    const newValue = { [name]: value };

    const newGit = gitHub.map((git, index) => {
      if (index === i) {
        return Object.assign(git, newValue);
      } else {
        return git;
      }
    });
    setNewGithub(newGit);
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
                          onChange={e => handleInputChange(e, i)}
                        ></input>
                      </div>
                      <div className="repoField">
                        <div className="githubLabel">Repo: </div>
                        <input
                          name="repository"
                          type="text"
                          className="repoInput"
                          value={repo.repository}
                          onChange={e => handleInputChange(e, i)}
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
                          onChange={e => handleInputChange(e, i)}
                        ></textarea>
                      </div>
                    </div>
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
