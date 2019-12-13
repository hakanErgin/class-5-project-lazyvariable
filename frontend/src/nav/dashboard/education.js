import React from 'react'

import { Form, Input, Button, DatePicker } from 'antd'

const { RangePicker } = DatePicker;

const Education = () => {

  function onDateChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <div>
      Education
      <Form>
        <Form.Item label="School">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Degree">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Field of study">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Grade">
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

export default Education;
