import React from 'react';
import { Card } from 'antd';

const GitHubCard = ({ data }) => {
  const gitHubData = data.Github;

  return gitHubData.map((git, key) => {
    return (
      <Card size="small" className="githubCard" key={key}>
        <h3>{git.title}</h3>
        <div>
          <span>{git.description}</span>
          <a href={git.repository}>Link</a>
        </div>
      </Card>
    );
  });
};

export default GitHubCard;
