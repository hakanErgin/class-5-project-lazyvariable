import useSignUpForm from './InputHooks';
import React from 'react';

import { Form, Input, Button, Typography } from 'antd';
const { Title } = Typography;

const Skills = () => {
  const handleOnclick = () => {
    alert('Successfully saved!'); //it will send data to mongodb
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    {
      skills: '',
    },
    handleOnclick,
  );

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
          <Button type="primary submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Skills;
