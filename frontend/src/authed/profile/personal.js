import React from 'react';
import Experience from './experience';
import { BrowserRouter as Route, Link } from 'react-router-dom';
// import Skills from './skills'
import './customStyle.css';
import { Form, Input, Button, Typography } from 'antd';
const { Title } = Typography;
const { TextArea } = Input;

const Personal = ({ setSelected, inputs, handleSubmit, handleInputChange }) => {
  console.log('personal inputs', inputs);

  return (
    <div className="customStyle">
      <Title level={3}>Personal & Contact information</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Item label="Name">
          <Input
            placeholder=""
            name="name"
            onChange={handleInputChange}
            value={inputs.name}
            required
          />
        </Form.Item>
        <Form.Item label="About">
          <TextArea
            className="newInput"
            rows={4}
            placeholder=""
            name="about"
            onChange={handleInputChange}
            value={inputs.about}
          />
        </Form.Item>
        <Form.Item label="Telephone Number">
          <Input placeholder="" name="phone" onChange={handleInputChange} value={inputs.phone} />
        </Form.Item>
        <Form.Item label="Country">
          <Input
            placeholder=""
            name="country"
            onChange={handleInputChange}
            value={inputs.country}
          />
        </Form.Item>
        <Form.Item label="City">
          <Input placeholder="" name="city" onChange={handleInputChange} value={inputs.city} />
        </Form.Item>

        <Form.Item label="Website">
          <Input
            placeholder=""
            name="website"
            onChange={handleInputChange}
            value={inputs.website}
          />
        </Form.Item>
        <Form.Item>
          <Link to="/auth/profile/experience">
            <Button
              type="primary"
              onClick={() => {
                return (
                  <div>
                    <Route>
                      <Experience />
                    </Route>
                  </div>
                );
              }}
            >
              Next
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Personal;
