import React, { useState, Fragment } from 'react';
import useSignUpForm from './InputHooks';

import { Form, Input, Button, DatePicker, Typography, Icon } from 'antd';
const { Title } = Typography;

const { RangePicker } = DatePicker;

const Experience = () => {
  function onDateChange(date, dateString) {
    console.log(date, dateString);
  }
  const [inputFields, setInputFields] = useState([
    {
      work_title: '',
      company: '',
      location: '',
      employmentType: '',
      description: '',
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
      description: '',
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
        {inputFields.map((inputField, index) => (
          <Fragment key={`${inputField}~${index}`}>
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
              <DatePicker onChange={onDateChange} name="startDate" value={inputs.startDate} />
              <RangePicker onChange={onDateChange} name="endDate" value={inputs.endDate} />
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

        {/* Since there are 2 next button, I deleted one of them */}
        {/* <Form.Item>
          <Button type="primary">Next</Button>
        </Form.Item> */}
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
