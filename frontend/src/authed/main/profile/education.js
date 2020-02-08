import React from 'react';
import { Form, Input, DatePicker, Typography } from 'antd';
import fields from './handlers/fieldData';

const { Title } = Typography;
const { RangePicker } = DatePicker;

const type = 'educationFields';
const fieldsArray = Object.values(fields[type]);

const Education = ({ inputs, handleInputChange, onDateChange }) => {
  // ADDING MORE EDUCATION IS NOT SUPPORTED ATM

  const formFromFields = fieldsArray.map((field, key) => {
    const objKey = Object.keys(field);
    if (!inputs) {
      return null;
    }

    if ({ objKey } === 'educationDescription') {
      return (
        <Form.Item label={field[objKey]} key={key}>
          <Input.TextArea
            className={objKey[0]}
            name={objKey}
            placeholder={field[objKey]}
            onChange={e => {
              handleInputChange(e, type);
            }}
            value={inputs.length > 0 ? inputs[0][objKey] : inputs[objKey]}
          />
        </Form.Item>
      );
    }

    return (
      <Form.Item label={field[objKey]} key={key}>
        <Input
          className={objKey[0]}
          name={objKey}
          placeholder={field[objKey]}
          onChange={e => {
            handleInputChange(e, type);
          }}
          value={inputs.length > 0 ? inputs[0][objKey] : inputs[objKey]}
        />
      </Form.Item>
    );
  });

  function date() {
    return (
      <Form.Item label="Date">
        <RangePicker
          onChange={(e, date) => {
            onDateChange(e, date, type);
          }}
          name="educationDate"
        />
      </Form.Item>
    );
  }

  return (
    <div id="educationComponent">
      <Title level={3}>Education</Title>
      <Form autoComplete="off">
        {formFromFields}
        {date()}
      </Form>
    </div>
  );
};

export default Education;
