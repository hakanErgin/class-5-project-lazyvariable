import React from 'react';
import './customStyle.css';

import { Form, Input, Button, Typography } from 'antd';
const { Title } = Typography;

const Skills = ({ inputs, handleSubmit, handleInputChange }) => {
  /* const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    {
      skills: '',
    },
    handleOnclick,
  ); */

  return (
    <div className="customStyle">
      <Title level={3}>Skills</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Item label="Describe Your Skills">
          <Input
            placeholder="Team player, Javascript, ..."
            name="skills"
            onChange={handleInputChange}
            value={inputs.skills}
            required
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Skills;
