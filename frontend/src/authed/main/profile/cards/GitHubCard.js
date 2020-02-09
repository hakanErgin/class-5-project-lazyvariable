import React from 'react';
import { Card } from 'antd';

const GitHubCard = ({ data }) => {
  const gitHubData = data.Github;

  return gitHubData.map((git, key) => {
    return (
      <Card
        type="inner"
        className="card"
        key={key}
        extra={<a href={git.repository}>Link</a>}
        title={git.title}
      >
        <div>
          <span>{git.description}</span>
        </div>
      </Card>
    );
  });
};

export default GitHubCard;
