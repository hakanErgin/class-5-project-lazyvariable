
import useSignUpForm from './InputHooks';
import React from 'react'

import { Form, Input, Button, Typography } from 'antd'
const { Title } = Typography

const Skills = () => {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm({
    skills: '',
  });

  return (
    <div>
    <Title level={3}>Skills</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Item label="Describe Your Skills">
          <Input
            placeholder="Team player, ..."
            name="skills"
            onChange={handleInputChange}
            value={inputs.skills}
            required
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary submit">
            <a href="../profile">Next</a>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Skills;
