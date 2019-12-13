import React from 'react'

import { Form, Input, Button } from 'antd'

const Personal = () => {

  return (
    <div>
      Personal & Contact information
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
