import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Card, Icon, Tooltip } from 'antd';
import fields from './fieldData';

// change wording. these are fews just for example purpose

const GitHubCard = ({ data }) => {
  const type = Object.keys(data)[0];
  //   const values = data[type];
  //   const title = setTitle(type);
  const gitHubData = data.Github;
  console.log('gitHubData', gitHubData);

  return gitHubData.map(git => {
    return (
      <Card size="small">
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
