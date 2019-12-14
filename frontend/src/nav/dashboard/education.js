import React from 'react';
import useSignUpForm from './InputHooks';


import { Form, Input, Button, DatePicker, Typography } from 'antd'
const { Title } = Typography
const { RangePicker } = DatePicker

const Education = () => {
  function onDateChange(date, dateString) {
    console.log(date, dateString);
  }

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm({
    school: '',
    degree: '',
    fieldOfStudy: '',
    grade: '',
    education_description: '',
    education_startDate: '',
    education_endDate: '',
  });

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
            name="education_description"
            onChange={handleInputChange}
            value={inputs.education_description}
          />
        </Form.Item>
        <Form.Item label="Date">
          <DatePicker
            onChange={onDateChange}
            name="education_startDate"
            onChange={handleInputChange}
            value={inputs.education_startDate}
          />
          <RangePicker
            onChange={onDateChange}
            name="education_endDate"
            onChange={handleInputChange}
            value={inputs.education_endDate}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary submit">
            <a href="./skills">Next</a>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Education;
