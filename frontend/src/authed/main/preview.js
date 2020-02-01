import React from "react"
import { useState, useEffect } from "react"
import fields from "./profile/handlers/fieldData"
import cardData from "./profile/handlers/cardData"

import { Grid, Row, Col } from "react-flexbox-grid"
import { Card, Icon, Tooltip } from "antd"
import "../../styles/preview.css"
const { Meta } = Card

const [personalFields, experienceFields, educationFields, numbers] = fields.map(
  e => e[Object.keys(e)]
)
console.log(personalFields, experienceFields, educationFields, numbers)

const Preview = ({ avatar, inputs, CheckDb }) => {
  useEffect(() => {
    CheckDb()
  }, [])

  if (!inputs || !avatar) {
    return null
  }

  const {
    name,
    email,
    about,
    website,
    phone,
    country,
    city,
    workTitle,
    companyName,
    companyLocation,
    employmentType,
    jobDescription,
    workStartDate,
    workEndDate,
    institution,
    fieldOfStudy,
    degree,
    educationDescription,
    educationStartDate,
    educationEndDate,
    skills,
    gitHub
  } = inputs

  const { metaCard } = cardData(
    name,
    email,
    about,
    website,
    phone,
    country,
    city,
    workTitle,
    companyName,
    companyLocation,
    employmentType,
    jobDescription,
    workStartDate,
    workEndDate,
    institution,
    fieldOfStudy,
    degree,
    educationDescription,
    educationStartDate,
    educationEndDate,
    skills,
    gitHub
  )

  console.log(inputs)

  return (
    <div id="preview">
      <div>{metaCard(avatar)}</div>
      <Card title="cARrd" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  )
}

export default Preview
