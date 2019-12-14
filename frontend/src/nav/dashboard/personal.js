import React from 'react'

import { Form, Input, Button, Typography } from 'antd'
const { Title } = Typography


const Personal = () => {

  return (
    <div>
      <Title level={3}>Personal & Contact information</Title>
      <Form>
        <Form.Item label="Your general title">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="About you">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Email">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Telephone">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="City">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Country">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Website">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Next</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Personal;
