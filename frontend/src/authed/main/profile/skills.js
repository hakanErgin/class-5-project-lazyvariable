import React from 'react';
import { Form, Input, Typography } from 'antd';

const field = 'skills';
const { Title } = Typography;

const Skills = ({ inputs, handleSkillsInputChange }) => {
  if (!inputs) {
    return null;
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="customStyle">
      <Title level={3}>Skills</Title>
      <Form autoComplete="off">
        <Form.Item label="Describe Your Skills">
          <Input.TextArea
            name={field}
            rows={4}
            placeholder={capitalizeFirstLetter(field)}
            onChange={e => {
              handleSkillsInputChange(e, field);
            }}
            value={inputs}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Skills;
