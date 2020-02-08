import React, { useState } from 'react';
import axios from 'axios';
import { Typography } from 'antd';

const { Title } = Typography;
const Projects = ({ postToGithub }) => {
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
      .catch(err => err);
  };

  const handleFetchClick = () => {
    FetchRepos();
    toggleShow(!show);
  };

  const handleClick = event => {
    postToGithub(selectedRepos);
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
          rep => rep.title !== repo.name && rep.description !== repo.description
        )
      ]);
    }
  };

  return (
    <div>
      <div className="header">
        <Title level={1}>Projects</Title>
        <div>Take your second step! Create your portfolio</div>
      </div>
      <div>
        <div>
          <img src="https://i.ibb.co/9g9Yp53/Component-19-1.png" alt="1" />
          <div>Import your projects</div>
          <p>Retrieve your repositories from GitHub </p>
          <button type="submit" onClick={handleFetchClick}>
            <span>
              <img
                src="https://i.ibb.co/6bKCfPT/Octicons-mark-github.png"
                alt="github"
              />
              <span>GitHub import</span>
            </span>
          </button>
        </div>
        <div>
          <img src="https://i.ibb.co/cknNkS2/Component-20-1.png" alt="2" />
          <div>Edit & customize your projects</div>
          <p>Edit your projects details to showcase it</p>
          <a href="/auth/portfolio">
            <button type="submit">Edit</button>
          </a>
        </div>
      </div>
      {show && <div>Select the repositories you want to import</div>}
      {show && (
        <div>
          {repos.map(repo => {
            return (
              <div>
                <form>
                  <div>
                    <input
                      name={repo.name}
                      type="checkbox"
                      onChange={e => handleCheckBoxChange(e, repo)}
                    />
                    <p>{repo.name}</p>
                  </div>
                </form>
              </div>
            );
          })}
        </div>
      )}
      {show && (
        <button type="button" value="import" onClick={handleClick}>
          Submit
        </button>
      )}
    </div>
  );
};
export default Projects;
