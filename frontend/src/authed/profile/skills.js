import React from 'react';
import { Form, Input, Typography } from 'antd';

const { Title } = Typography;

const Skills = ({ inputs, handleInputChange, handleSubmit }) => {
  const skills = inputs.skills;

  return (
    <div className="customStyle">
      <Title level={3}>Skills</Title>
      <Form autoComplete="off">
        <Form.Item label="Describe Your Skills">
          <Input
            placeholder={skills}
            name="skills"
            onChange={handleInputChange}
            value={inputs.skills}
            required
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Skills;
