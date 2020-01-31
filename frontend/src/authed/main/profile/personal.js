import React from "react"
import { Form, Input, Typography } from "antd"
import "../../../styles/personal.css"
import fields from "./handlers/fieldData"

const fieldsArray = Object.values(fields[0])[0]
// console.log(fieldsArray)

const { Title } = Typography

const Personal = ({ inputs, handleInputChange }) => {
  const formFromFields = fieldsArray.map((field, key) => {
    return (
      <Form.Item label={field} key={key}>
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
