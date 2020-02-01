import React from 'react';
import { Form, Input, Typography } from 'antd';

const { Title } = Typography;
const type = 'skills';

const Skills = ({ inputs, handleInputChange }) => {
  if (!inputs) {
    return null;
  }
  return (
    <div className="customStyle">
      <Title level={3}>Skills</Title>
      <Form autoComplete="off">
        <Form.Item label="Describe Your Skills">
          <Input
            placeholder="skills"
            name="skills"
            onChange={e => {
              handleInputChange(e, type);
            }}
            value={inputs.skills}
            required
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Skills;
