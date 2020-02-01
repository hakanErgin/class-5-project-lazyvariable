import React from 'react';
import { Form, Input, DatePicker, Typography } from 'antd';
import fields from './handlers/fieldData';

const { Title } = Typography;
const { RangePicker } = DatePicker;

const type = 'educationFields';

const fieldsArray = Object.values(fields[type]);
// console.log(fieldsArray)

const Education = ({ inputs, handleInputChange, onDateChange }) => {
  // ADDING MORE EDUCATION IS NOT SUPPORTED ATM

  const formFromFields = fieldsArray.map((field, key) => {
    const objKey = Object.keys(field);
    if (!inputs) {
      return null;
    }
    return (
      <Form.Item label={field[objKey]} key={key}>
        <Input
          name={objKey}
          placeholder={field[objKey]}
          onChange={e => {
            handleInputChange(e, type);
          }}
          value={inputs[objKey]}
        />
      </Form.Item>
    );
  });

  return (
    <div id="educationComponent">
      <Title level={3}>Education</Title>
      <Form autoComplete="off">
        {formFromFields}
        <Form.Item label="Date">
          <RangePicker
            onChange={(e, date) => {
              onDateChange(e, date, type);
            }}
            name="educationDate"
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Education;
