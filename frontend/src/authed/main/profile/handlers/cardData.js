import React from "react"
import { Grid, Row, Col } from "react-flexbox-grid"
import { Card, Icon, Tooltip } from "antd"

const { Meta } = Card

const cardData = (
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
) => {
  const metaCard = avatar => {
    return (
      <Card
        style={{ width: "70vw" }}
        actions={[
          <a href={`mailto:${email}`}>
            <Tooltip title="Email">
              <Icon type="mail" />
            </Tooltip>
          </a>,
          <a href={`https://${website}`}>
            {/* !!!! :)
             */}
            <Tooltip title="Website">
              <Icon type="global" />,
            </Tooltip>
          </a>,
          <Tooltip title={phone}>
            <Icon type="phone" />,
          </Tooltip>,
          <Tooltip title={city + " " + country}>
            <Icon type="compass" />
          </Tooltip>
        ]}
      >
        <Grid fluid>
          <Row>
            <Col xs>
              <div>
                <Meta title={name} />
              </div>
              <div>
                <p>{about}</p>
              </div>
            </Col>
            <Col xs={2}>
              <img alt="example" src={avatar} style={{ width: "10vw" }} />
            </Col>
          </Row>
        </Grid>
      </Card>
    )
  }

  const sectionCard = () => {}

  return { metaCard, sectionCard }
}

export default cardData
