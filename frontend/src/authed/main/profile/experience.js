import React from "react"
import { Form, Input, DatePicker, Typography } from "antd"

const { Title } = Typography
const { RangePicker } = DatePicker

const Experience = ({ inputs, handleInputChange, onExpDateChange }) => {
  // ADDING MORE EXPERIENCES IS NOT SUPPORTED ATM

  const fields = [
    { workTitle: "Job title" },
    { companyName: "Company Name" },
    { companyLocation: "Location" },
    { employmentType: "Employment type" },
    { jobDescription: "Description" }
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
