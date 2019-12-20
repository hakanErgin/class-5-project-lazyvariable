import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profile/customStyle.css';
import { useHistory /*Redirect*/ } from 'react-router-dom';

const GithubComponent = () => {
  const [repos, setRepos] = useState([]);
  // const [show, toggleShow] = useState(false);

  const gitHub = [];
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${localStorage.getItem('username')}/repos`)
      .then(result => {
        setRepos(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
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
  let history = useHistory();
  const handleClick = () => {
    history.push('/auth/portfolio');
  };
  return (
    <div>
      <div className="profileHeader">
        <div className="titleMin">Select the repositories you want to import</div>
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
        <form
          onSubmit={event => {
            event.preventDefault();
            ImportButton();
            handleClick();
            console.log(gitHub);
          }}
        >
          <input type="submit" className="importGithubBtn" value="import" />
        </form>
      </div>
    </div>
  );
};

export default GithubComponent;
