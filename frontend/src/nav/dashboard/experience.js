import React from 'react';
import useSignUpForm from './InputHooks';

import { Form, Input, Button, DatePicker, Typography } from 'antd'
const { Title } = Typography

const { RangePicker } = DatePicker;

const Experience = () => {
  function onDateChange(date, dateString) {
    console.log(date, dateString);
  }

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm({
    work_title: '',
    company: '',
    location: '',
    employmentType: '',
    description: '',
    country: '',
  });

  return (
    <div>
      <Title level={3}>Work experience</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Item label="Title">
          <Input
            placeholder=""
            name="work_title"
            onChange={handleInputChange}
            value={inputs.work_title}
          />
        </Form.Item>
        <Form.Item label="Company">
          <Input
            placeholder=""
            name="company"
            onChange={handleInputChange}
            value={inputs.company}
          />
        </Form.Item>
        <Form.Item label="Location">
          <Input
            placeholder=""
            name="location"
            onChange={handleInputChange}
            value={inputs.location}
          />
        </Form.Item>
        <Form.Item label="Employment type">
          <Input
            placeholder=""
            name="employmentType"
            onChange={handleInputChange}
            value={inputs.employmentType}
          />
        </Form.Item>
        <Form.Item label="Description">
          <Input
            placeholder=""
            name="description"
            onChange={handleInputChange}
            value={inputs.description}
          />
        </Form.Item>
        <Form.Item label="Date">
          <DatePicker
            onChange={onDateChange}
            name="startDate"
            onChange={handleInputChange}
            value={inputs.startDate}
          />
          <RangePicker
            onChange={onDateChange}
            name="endDate"
            onChange={handleInputChange}
            value={inputs.endDate}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary submit">
            <a href="./education">Next</a>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Experience;
