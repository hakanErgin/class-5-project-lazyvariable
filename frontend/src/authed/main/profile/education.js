import React from "react"
import { Form, Input, DatePicker, Typography } from "antd"
import fields from "./handlers/fieldData"

const { Title } = Typography
const { RangePicker } = DatePicker

const fieldsArray = Object.values(fields[2])[0]
// console.log(fieldsArray)

const Education = ({ inputs, handleInputChange, onEduDateChange }) => {
  // ADDING MORE EDUCATION IS NOT SUPPORTED ATM

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
    <div id="educationComponent">
      <Title level={3}>Education</Title>
      <Form autoComplete="off">
        {formFromFields}
        <Form.Item label="Date">
          <RangePicker onChange={onEduDateChange} name="educationDate" />
        </Form.Item>
      </Form>
    </div>
  )
}

export default Education
