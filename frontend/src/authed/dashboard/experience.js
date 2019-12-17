import React, { useState, Fragment } from 'react';

import { Form, Input, Button, DatePicker, Typography, Icon } from 'antd';
const { Title } = Typography;

const { RangePicker } = DatePicker;

const Experience = ({ inputs, ref, handleSubmit, handleInputChange, onDateChange }) => {
  const [inputFields, setInputFields] = useState([
    {
      workTitle: '',
      company: '',
      location: '',
      employmentType: '',
      jobDescription: '',
      country: '',
      Date: '',
    },
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({
      work_title: '',
      company: '',
      location: '',
      employmentType: '',
      jobDescription: '',
      country: '',
      Date: '',
    });
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  return (
    <div>
      <Title level={3}>Work experience</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        {inputFields.map((inputField, index) => (
          <Fragment key={`${inputField}~${index}`}>
            <Form.Item label="Title">
              <Input
                placeholder=""
                name="workTitle"
                onChange={handleInputChange}
                value={inputs.workTitle}
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
                name="jobDescription"
                onChange={handleInputChange}
                value={inputs.jobDescription}
              />
            </Form.Item>
            <Form.Item label="Date">
              <RangePicker
                onChange={onDateChange}
                name="experienceDate"
                value={inputs.experienceDate}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="dashed"
                style={{ width: '60%' }}
                onClick={() => handleRemoveFields(index)}
              >
                <Icon type="plus" /> Remove Field
              </Button>
            </Form.Item>
          </Fragment>
        ))}
        <Form.Item>
          <Button type="dashed" style={{ width: '60%' }} onClick={() => handleAddFields()}>
            <Icon type="plus" /> Add field
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary submit" onClick={handleSubmit}>
            <a href="./education">Next</a>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Experience;
