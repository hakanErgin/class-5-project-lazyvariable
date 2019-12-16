import React from 'react';

import { Form, Input, Button, DatePicker, Typography } from 'antd';
const { Title } = Typography;

const { RangePicker } = DatePicker;

const Experience = ({ inputs, handleSubmit, handleInputChange }) => {
  /*function onDateChange(date, dateString) {
    console.log(date, dateString);
  }*/

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
          <RangePicker
            onChange={handleInputChange}
            name="startEndDate"
            value={inputs.experienceDate}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary submit" target="/nav/dashboard/education">
            <a href="./education">Next</a>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Experience;
