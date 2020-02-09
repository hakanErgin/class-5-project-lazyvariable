import React from 'react';
import { Form, Input, Typography } from 'antd';
import fields from './handlers/fieldData';

const type = 'personalFields';
const fieldsArray = Object.values(fields[type]);

const { Title } = Typography;

const Personal = ({ inputs, handleInputChange }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const formFromFields = fieldsArray.map((field, key) => {
    if (!inputs) {
      return null;
    }
    return (
      <Form.Item label={field} key={key} className="forms">
        <Input
          name={field}
          placeholder={capitalizeFirstLetter(field)}
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
    <div className="profileComponents">
      <Title level={3}>personal & contact information</Title>
      <Form autoComplete="off" className="formOverflow">
        {formFromFields}
      </Form>
    </div>
  );
};

export default Personal;
