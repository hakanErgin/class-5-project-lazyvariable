import React from 'react';
import { Form, Input, Typography } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

const Personal = ({ inputs, handleInputChange }) => {
  const { email, name, about, website, phone, country, city } = inputs;

  return (
    <div className="customStyle">
      <Title level={3}>Personal & Contact information</Title>
      <Form autoComplete="off">
        <Form.Item label="Name">
          <Input
            name="name"
            onChange={handleInputChange}
            placeholder={name}
            value={inputs.name}
            required
          />
        </Form.Item>
        <Form.Item label="About">
          <TextArea
            className="newInput"
            rows={4}
            placeholder={about}
            name="about"
            onChange={handleInputChange}
            value={inputs.about}
          />
        </Form.Item>
        <Form.Item label="Telephone Number">
          <Input
            placeholder={phone}
            name="phone"
            onChange={handleInputChange}
            value={inputs.phone}
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            placeholder={email}
            name="email"
            onChange={handleInputChange}
            value={inputs.email}
          />
        </Form.Item>
        <Form.Item label="Country">
          <Input
            placeholder={country}
            name="country"
            onChange={handleInputChange}
            value={inputs.country}
          />
        </Form.Item>
        <Form.Item label="City">
          <Input
            placeholder={city}
            name="city"
            onChange={handleInputChange}
            value={inputs.city}
          />
        </Form.Item>

        <Form.Item label="Website">
          <Input
            placeholder={website}
            name="website"
            onChange={handleInputChange}
            value={inputs.website}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Personal;
