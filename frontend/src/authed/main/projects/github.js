import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import REACT_APP_BACKEND_URI from '../../../helpers/herokuHelper';

const GithubComponent = () => {
  const [repos, setRepos] = useState([]);

  const gitHub = [];
  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users/${localStorage.getItem('username')}/repos`
      )
      .then(result => {
        setRepos(result.data);
      })
      .catch(err => err);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const ImportButton = () => {
    axios.post(
      `${REACT_APP_BACKEND_URI}/user/github/${localStorage.getItem('ID')}`,
      {
        gitHub
      },
      {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      }
    );
  };
  let history = useHistory();
  const handleClick = () => {
    history.push('/auth/portfolio');
  };
  return (
    <div>
      <div className="profileHeader">
        <div className="titleMin">
          Select the repositories you want to import
        </div>
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
                    <input
                      type="checkbox"
                      className="checkRepo"
                      onChange={handleGithubChange}
                    />
                    <p className="repoTitle">{title}</p>
                  </div>
                </form>
              </div>
            );
          })}
        </div>
        <form
          onSubmit={event => {
            event.preventDefault();
            ImportButton();
            handleClick();
          }}
        >
          <input type="submit" className="importGithubBtn" value="import" />
        </form>
      </div>
    </div>
  );
};

export default GithubComponent;
