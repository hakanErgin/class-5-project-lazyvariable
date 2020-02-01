import React from 'react';
import { Form, Input, Typography } from 'antd';
import '../../../styles/personal.css';
import fields from './handlers/fieldData';

const type = 'personalFields';
const fieldsArray = Object.values(fields[type]);

const { Title } = Typography;

const Personal = ({ inputs, handleInputChange }) => {
  const formFromFields = fieldsArray.map((field, key) => {
    if (!inputs) {
      return null;
    }
    return (
      <Form.Item label={field} key={key}>
        <Input
          name={field}
          placeholder={field}
          onChange={e => {
            handleInputChange(e, type);
          }}
          value={inputs[field]}
          // users cannot change their login email
          disabled={field === 'email'}
        />
      </Form.Item>
    );
  });

  return (
    <div className="personalComponent">
      <div></div>
      <Title level={3}>personal & contact information</Title>
      <Form autoComplete="off">{formFromFields}</Form>
    </div>
  );
};

export default Personal;
