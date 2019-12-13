import React from 'react'

import { Form, Input, Button } from 'antd'


const Skills = () => {

  return (
    <div>
      Skills
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
