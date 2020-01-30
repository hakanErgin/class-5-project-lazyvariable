import React from "react"
import { Form, Input, DatePicker, Typography } from "antd"

const { Title } = Typography
const { RangePicker } = DatePicker

const Education = ({ inputs, handleInputChange, onEduDateChange }) => {
  // ADDING MORE EDUCATION IS NOT SUPPORTED ATM

  const fields = [
    { institution: "Institution" },
    { fieldOfStudy: "Field of study" },
    { degree: "Degree" },
    { educationDescription: "Description" }
  ]

  const formFromFields = fields.map(field => {
    const objKey = Object.keys(field)

    return (
      <Form.Item label={field[objKey]}>
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
