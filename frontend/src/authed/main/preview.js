import React from "react"
import { useState, useEffect } from "react"

import REACT_APP_BACKEND_URI from "../../helpers/herokuHelper"
import fields from "./profile/handlers/fieldData"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
  faGlobeEurope
} from "@fortawesome/free-solid-svg-icons"

import { Grid, Row, Col } from "react-flexbox-grid"
import { Card } from "antd"

import "../../styles/preview.css"

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

  console.log(inputs)

  return (
    <div id="preview">
      <Grid fluid className="personalField1">
        <img src={avatar.avatar} alt={"avatar"} />
        <h1>{name}</h1>
        <h2>{workTitle}</h2>
        <Row className="personalField1">
          <Col>
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" color="#082371" />
            <div className="info">
              {city}, {country}
            </div>
          </Col>
          <Col>
            <FontAwesomeIcon icon={faPhoneAlt} size="2x" color="#082371" />
            <div className="info">{phone}</div>
          </Col>
          <Col>
            <FontAwesomeIcon icon={faEnvelope} size="2x" color="#082371" />
            <div className="info">{email}</div>
          </Col>
          <Col>
            <FontAwesomeIcon icon={faGlobeEurope} size="2x" color="#082371" />
            <div className="info">{website}</div>
          </Col>
        </Row>
        <Col className="about">{about}</Col>
      </Grid>
    </div>
  )
}

export default Preview
