import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from 'antd';

const { Title } = Typography;
const Projects = ({ postToGithub, CheckDb }) => {
  const [repos, setRepos] = useState([]);
  const [show, toggleShow] = useState(false);
  const [selectedRepos, setSelectedRepos] = useState([]);
  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CheckDb()
      .then(inputs => {
        setInputs(inputs);
        inputs['gitHub'] &&
          inputs['gitHub'].forEach(repo => {
            console.log('repo from effect', repo);
            selectedRepos[0] && selectedRepos[0].length === 0
              ? setSelectedRepos([repo])
              : setSelectedRepos([...selectedRepos, repo]);
          });
      })
      .then(() => inputs && setLoading(false));
  }, []);

  if (loading) {
    return null;
  }

  const isAlreadyImported = name => {
    const isSame = title => title === name;
    let titles = [];
    inputs['gitHub'].forEach(repo => {
      titles.push(repo.title);
    });
    return titles.some(isSame);
  };
  console.log('inputs[gitHub]', inputs['gitHub']);
  console.log('selectedRepos', selectedRepos);

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
    console.log('selectedRepos to post', selectedRepos);

    postToGithub(selectedRepos);
    return (window.location.href = './portfolio');
  };

  const handleCheckBoxChange = (event, repo) => {
    console.log('repo selected', repo);

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
            <button disabled={inputs['gitHub'].length === 0}>Edit</button>
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
                      defaultChecked={isAlreadyImported(repo.name)}
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
        <button
          type="button"
          value="import"
          onClick={handleClick}
          disabled={
            !selectedRepos ||
            selectedRepos.length === 0 ||
            selectedRepos[0].length === 0
          }
        >
          Submit
        </button>
      )}
    </div>
  );
};
export default Projects;
