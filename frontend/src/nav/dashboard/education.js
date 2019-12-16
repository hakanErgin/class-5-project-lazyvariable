import React from 'react';

import { Form, Input, Button, DatePicker, Typography } from 'antd';
const { Title } = Typography;
const { RangePicker } = DatePicker;

const Education = ({ inputs, handleSubmit, handleInputChange, onDateChange }) => {
  return (
    <div>
      <Title level={3}>Education</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Item label="School">
          <Input placeholder="" name="school" onChange={handleInputChange} value={inputs.school} />
        </Form.Item>
        <Form.Item label="Degree">
          <Input placeholder="" name="degree" onChange={handleInputChange} value={inputs.degree} />
        </Form.Item>
        <Form.Item label="Field of study">
          <Input
            placeholder=""
            name="fieldOfStudy"
            onChange={handleInputChange}
            value={inputs.fieldOfStudy}
          />
        </Form.Item>
        <Form.Item label="Grade">
          <Input placeholder="" name="grade" onChange={handleInputChange} value={inputs.grade} />
        </Form.Item>
        <Form.Item label="Description">
          <Input
            placeholder=""
            name="educationDescription"
            onChange={handleInputChange}
            value={inputs.educationDescription}
          />
        </Form.Item>
        <Form.Item label="Date">
          <RangePicker onChange={onDateChange} name="educationDate" value={inputs.educationDate} />
        </Form.Item>
        <Form.Item>
          <Button type="primary submit" onClick={handleSubmit}>
            <a href="./skills">Next</a>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Education;
