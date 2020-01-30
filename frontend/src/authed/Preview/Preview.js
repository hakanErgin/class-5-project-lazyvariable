import React from "react"
import { useState, useEffect } from "react"

import REACT_APP_BACKEND_URI from "../../helpers/herokuHelper"

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

const icons = [faPhoneAlt, faEnvelope, faMapMarkerAlt, faGlobeEurope]

const useFetch = url => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const FetchData = async () => {
      try {
        const resp = await fetch(url)
        const json = await resp.json()
        setResponse(json)
      } catch (error) {
        setError(error)
      }
    }
    FetchData()
  }, [url])
  return { response, error }
}

function Preview(avatar) {
  const res = useFetch(
    `${REACT_APP_BACKEND_URI}/user/${localStorage.getItem("ID")}`
  )

  if (!res.response) {
    return null
  }

  const {
    email,
    name,
    about,
    website,
    phone,
    country,
    city,
    institution,
    fieldOfStudy,
    educationStartDate,
    degree,
    educationEndDate,
    educationDescription,
    workTitle,
    companyName,
    companyLocation,
    employmentType,
    workStartDate,
    workEndDate,
    jobDescription,
    skills,
    gitHub
  } = res.response

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
      <Grid fluid id="cards">
        <img
          className="numberIcon"
          src="https://i.ibb.co/mCtK3Df/Component-19-1.png"
          alt="1"
        />
        {/* move this img inside */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3>Work Experience</h3>
          <strong>Job title:</strong> {workTitle}
          <strong>Employment type:</strong> {employmentType}
          <strong>Company:</strong> {companyName}
          <strong>Start date: </strong>
          {workStartDate}
          <strong>Company location:</strong> {companyLocation}
          <strong>End date: </strong>
          {workEndDate}
          <strong>Description: </strong>
          {jobDescription}
        </div>
      </Grid>
      <div className="titleWrapper">
        <img
          className="numberIcon"
          src="https://i.ibb.co/F7cPfLS/Component-20-1.png"
          alt="2"
        />
        <h3 className="title1">Education</h3>
      </div>
      <div className="workContainer">
        <div className="workInfo">
          <div className="job">
            <strong>Institution:</strong> {institution}
          </div>
          <div className="job">
            <strong>Field of study:</strong> {fieldOfStudy}
          </div>

          <div className="job">
            <strong>Degree:</strong> {degree}
          </div>
          <div className="job">
            <strong>Start date: </strong>
            {educationStartDate}
          </div>
          <div className="job">
            <strong>Description: </strong>
            <br />
            {educationDescription}
          </div>
          <div className="job">
            <strong>End date: </strong>
            {educationEndDate}
          </div>
        </div>
      </div>
      <div className="titleWrapper">
        <img
          className="numberIcon"
          src="https://i.ibb.co/FHJgrLJ/Component-19-1.png"
          alt="3"
        />
        <h3 className="title1">Skills</h3>
      </div>
      <div className="workContainer">
        <div className="workInfo">
          <div className="job">
            <strong>Skills:</strong> {skills}
          </div>
        </div>
      </div>
      <div className="titleWrapper">
        <img
          className="numberIcon"
          src="https://i.ibb.co/BC6yWg6/Component-20-1.png"
          alt="4"
        />
        <h3 className="title1">Projects</h3>
      </div>
      {gitHub.map(repo => {
        return (
          <div>
            <div className="workContainer">
              <div className="workInfo">
                <div className="job">
                  <strong>Name:</strong> {repo.title}
                </div>
                <div className="job">
                  <strong>Description:</strong> {repo.description}
                </div>
                <div className="job">
                  <strong>URL:</strong>
                  <a href={repo.repository}> {repo.repository} </a>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Preview
