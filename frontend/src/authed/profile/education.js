import React, { useState, Fragment } from 'react';
import { Form, Input, Button, DatePicker, Typography, Icon } from 'antd';

import REACT_APP_BACKEND_URI from '../../helpers/herokuHelper';

const { Title } = Typography;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const Education = ({ inputs, handleInputChange, onEduDateChange }) => {
  // ADDING MORE EDUCATION IS NOT SUPPORTED ATM

  // const handleAddFields = () => {
  //   const values = [...inputFields];
  //   values.push({
  //     institution: '',
  //     fieldOfStudy: '',
  //     degree: '',
  //     educationDescription: '',
  //     educationDate: ''
  //   });
  //   setInputFields(values);
  // };

  // const handleRemoveFields = index => {
  //   const values = [...inputFields];
  //   values.splice(index, 1);
  //   setInputFields(values);
  // };

  const { institution, fieldOfStudy, degree, educationDescription } = inputs;

  return (
    <div className="customStyle">
      <Title level={3}>Education</Title>
      <Form autoComplete="off">
        <Form.Item label="Institution">
          <Input
            placeholder={institution}
            name="institution"
            onChange={handleInputChange}
            value={inputs.institution}
          />
        </Form.Item>
        <Form.Item label="Field of study">
          <Input
            placeholder={fieldOfStudy}
            name="fieldOfStudy"
            onChange={handleInputChange}
            value={inputs.fieldOfStudy}
          />
        </Form.Item>
        <Form.Item label="Degree">
          <Input
            placeholder={degree}
            name="degree"
            onChange={handleInputChange}
            value={inputs.degree}
          />
        </Form.Item>
        <Form.Item label="Description">
          <TextArea
            className="newInput"
            rows={4}
            placeholder={educationDescription}
            name="educationDescription"
            onChange={handleInputChange}
            value={inputs.educationDescription}
          />
        </Form.Item>
        <Form.Item label="Date">
          <RangePicker onChange={onEduDateChange} name="educationDate" />
        </Form.Item>
        {/* <Form.Item>
          <Button
            type="dashed"
            style={{ width: '60%' }}
            onClick={() => handleRemoveFields(index)}
          >
            <Icon type="plus" /> Remove education
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            type="dashed"
            style={{ width: '60%' }}
            onClick={() => handleAddFields()}
          >
            <Icon type="plus" /> Add education
          </Button>
        </Form.Item> */}
      </Form>
    </div>
  );
};

export default Education;
