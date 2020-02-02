import React from "react";
import "../styles/homepage.css";
import { Button } from "antd";
import { Grid, Row, Col } from "react-flexbox-grid";
// import { cardList } from "./homepageHelper"

const logo = require("../uploads/logo.png");

const Homepage = () => {
  return (
    <div id="homepage">
      <Grid>
        <Row id="header">
          <Col xs={2}>
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </Col>
          <Col xs={4}>
            <div>
              <Button target href="/login">
                Log in
              </Button>
              <Button target href="/signup">
                Sign Up
              </Button>
            </div>
          </Col>
        </Row>
      </Grid>
      <Grid id="mid-section">
        <Row between="xs" className="rows">
          <Col xs>
            <h1>
              Are you a developer?
              <br /> Build your portfolio with a few clicks!
            </h1>
          </Col>
          <Col xs id="toggleImg">
            <img
              src="https://i.ibb.co/3vQC1vV/Group-58-2x.png"
              alt="Group-58-2x"
              border="0"
            />
          </Col>
          <Grid id="secondGrid">
            <Row center="xs" className="rows">
              <Col xs className="cols">
                <img
                  src="https://i.ibb.co/py6f7Wz/resume.png"
                  alt="Group-58-2x"
                  border="0"
                />
                <h3>Build your resume</h3>
              </Col>
              <Col xs className="cols">
                <img
                  src="https://i.ibb.co/dMZMrNd/employee.png"
                  alt="Group-58-2x"
                  border="0"
                />
                <h3>Edit your personal information</h3>
              </Col>
              <Col xs className="cols">
                <img
                  src="https://i.ibb.co/1Zqtwp9/github.png"
                  alt="Group-58-2x"
                  border="0"
                />
                <h3>Retrieve your repositories from GitHub</h3>
              </Col>
              <Col xs className="cols">
                <img
                  src="https://i.ibb.co/gzd76pT/management.png"
                  alt="Group-58-2x"
                  border="0"
                />
                <h3>Edit your repository information</h3>
              </Col>
              <Col xs className="cols">
                <img
                  src="https://i.ibb.co/Rhm0wJ3/list.png"
                  alt="Group-58-2x"
                  border="0"
                />
                <h3>Easily accessible by the employers</h3>
              </Col>
            </Row>
          </Grid>
        </Row>
      </Grid>
      <Grid>
        <Row center="xs">
          <Col xs>
            <img src="https://i.ibb.co/jgJW3wx/logomin.png" alt="logomin" />
            <p>All rights are reserved</p>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Homepage;
