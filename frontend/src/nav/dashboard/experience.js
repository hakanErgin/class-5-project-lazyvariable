import React from 'react'

import { Form, Input, Button, DatePicker } from 'antd'

const { RangePicker } = DatePicker;

const Experience = () => {

  function onDateChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <div>
      Work experience
      <Form>
        <Form.Item label="Title">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Company">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Location">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Employement type">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Description">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Date">
          <DatePicker onChange={onDateChange} />
          <RangePicker onChange={onDateChange} />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Next</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Experience;
