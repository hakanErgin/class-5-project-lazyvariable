import React from "react"
import { Form, Input, DatePicker, Typography } from "antd"
import fields from "./handlers/fieldData"

const { Title } = Typography
const { RangePicker } = DatePicker

const fieldsArray = Object.values(fields[1])[0]
// console.log(fieldsArray)

const Experience = ({ inputs, handleInputChange, onExpDateChange }) => {
  // ADDING MORE EXPERIENCES IS NOT SUPPORTED ATM

  const formFromFields = fieldsArray.map((field, key) => {
    const objKey = Object.keys(field)

    return (
      <Form.Item label={field[objKey]} key={key}>
        <Input
          name={objKey}
          placeholder={objKey}
          onChange={handleInputChange}
          value={inputs[objKey]}
        />
      </Form.Item>
    )
  })

  return (
    <div id="experienceComponent">
      <Title level={3}>Work experience</Title>
      <Form autoComplete="off">
        {formFromFields}
        <Form.Item label="Date">
          <RangePicker onChange={onExpDateChange} name="experienceDate" />
        </Form.Item>
      </Form>
    </div>
  )
}

export default Experience
