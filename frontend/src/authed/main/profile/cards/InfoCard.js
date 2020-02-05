import React from 'react';
import { Card } from 'antd';

// change wording. these are fews just for example purpose
const setTitle = type => {
  switch (type) {
    case 'experienceFields':
      return 'Experiences';
    case 'educationFields':
      return 'Education';
    case 'skills':
      return 'Skills';
    default:
      return 'Other';
  }
};

const InfoCard = ({ data }) => {
  const type = Object.keys(data)[0];
  const values = data[type];
  const title = setTitle(type);

  return (
    <Card size="small">
      <h3>{title}</h3>

      {Object.keys(values).map(item => {
        const keyValuePair =
          type !== 'skills' ? `${item}: ${values[item]}` : values[item];
        return values[item] && <div>{keyValuePair}</div>;
      })}
    </Card>
  );
};

export default InfoCard;
