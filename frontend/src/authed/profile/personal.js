import React from "react"
import { Form, Input, Typography } from "antd"
import "../../styles/personal.css"

const { Title } = Typography

const Personal = ({ inputs, handleInputChange }) => {
  const fields = [
    "name",
    "email",
    "about",
    "website",
    "phone",
    "country",
    "city"
  ]

  const formFromFields = fields.map(field => {
    return (
      <Form.Item label={field}>
        <Input
          name={field}
          placeholder={field}
          onChange={handleInputChange}
          value={inputs[field]}
        />
      </Form.Item>
    )
  })

  return (
    <div className="personalComponent">
      <div></div>
      <Title level={3}>personal & contact information</Title>
      <Form autoComplete="off">{formFromFields}</Form>
    </div>
  )
}

export default Personal
