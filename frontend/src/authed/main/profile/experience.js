import React from 'react';
import { Form, Input, DatePicker, Typography } from 'antd';
import fields from './handlers/fieldData';

const { Title } = Typography;
const { RangePicker } = DatePicker;

const type = 'experienceFields';
const fieldsArray = Object.values(fields[type]);

const Experience = ({ inputs, handleInputChange, onDateChange }) => {
  // ADDING MORE EXPERIENCES IS NOT SUPPORTED ATM

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
          value={inputs[0][objKey]}
        />
      </Form.Item>
    );
  });

  return (
    <div id="experienceComponent">
      <Title level={3}>Work experience</Title>
      <Form autoComplete="off">
        {formFromFields}
        <Form.Item label="Date">
          <RangePicker
            onChange={(e, date) => {
              onDateChange(e, date, type);
            }}
            name="experienceDate"
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Experience;
