import React, { useState, Fragment } from 'react';
import useSignUpForm from './InputHooks';

import { Form, Input, Button, DatePicker, Typography, Icon } from 'antd';
const { Title } = Typography;
const { RangePicker } = DatePicker;

const Education = () => {
  function onDateChange(date, dateString) {
    console.log(date, dateString);
  }
  const [inputFields, setInputFields] = useState([
    { school: '', field: '', degree: '', education_startDate: '', education_endDate: '' },
  ]);
  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({
      institution: '',
      fieldOfStudy: '',
      degree: '',
      education_startDate: '',
      education_endDate: '',
    });
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm({
    school: '',
    degree: '',
    fieldOfStudy: '',
    // grade: '',
    // education_description: '',
    education_startDate: '',
    education_endDate: '',
  });

  return (
    <div>
      <Title level={3}>Education</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        {inputFields.map((inputField, index) => (
          <Fragment key={`${inputField}~${index}`}>
            <Form.Item label="School">
              <Input
                placeholder=""
                name="school"
                onChange={handleInputChange}
                value={inputs.school}
              />
            </Form.Item>
            <Form.Item label="Degree">
              <Input
                placeholder=""
                name="degree"
                onChange={handleInputChange}
                value={inputs.degree}
              />
            </Form.Item>
            <Form.Item label="Field of study">
              <Input
                placeholder=""
                name="fieldOfStudy"
                onChange={handleInputChange}
                value={inputs.fieldOfStudy}
              />
            </Form.Item>

            {/* We don't have description&grade in our data model, so I commented them out*/}

            {/* <Form.Item label="Grade">
          <Input placeholder="" name="grade" onChange={handleInputChange} value={inputs.grade} />
        </Form.Item>
        <Form.Item label="Description">
          <Input
            placeholder=""
            name="education_description"
            onChange={handleInputChange}
            value={inputs.education_description}
          />
        </Form.Item> */}
            <Form.Item label="Date">
              <DatePicker
                onChange={onDateChange}
                name="education_startDate"
                value={inputs.education_startDate}
              />
              <RangePicker
                onChange={onDateChange}
                name="education_endDate"
                value={inputs.education_endDate}
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
          <Button type="primary submit">
            <a href="./skills">Next</a>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Education;
