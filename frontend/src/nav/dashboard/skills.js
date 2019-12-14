import React from 'react'

import { Form, Input, Button, Typography } from 'antd'
const { Title } = Typography


const Skills = () => {

  return (
    <div>
    <Title level={3}>Skills</Title>
      <Form>
        <Form.Item label="Describe">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Next</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Skills;
