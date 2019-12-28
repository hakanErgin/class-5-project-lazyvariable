import React from 'react';
// import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
//import { Timeline, Icon, Divider, Card, Col, Row } from 'antd';
import './Preview.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';

import HEROKU_URI from '../../helpers/herokuHelper'

const useFetch = url => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    FetchData();
  }, [url]);
  return { response, error };
};

function Preview() {
  //const [github, setGithub] = React.useState([]);
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${localStorage.getItem('username')}`)
      .then(result => {
        setAvatar(result.data.avatar_url);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const res = useFetch(`${HEROKU_URI}/user/${localStorage.getItem('ID')}`);

  if (!res.response) {
    return null;
  }

  const email = res.response.email;
  const name = res.response.name;
  const about = res.response.about;
  const website = res.response.website;
  const phone = res.response.phone;
  const country = res.response.country;
  const city = res.response.city;
  const institution = res.response.institution;
  const fieldOfStudy = res.response.fieldOfStudy;
  const educationStartDate = res.response.educationStartDate;
  const degree = res.response.degree;
  const educationEndDate = res.response.educationEndDate;
  const educationDescription = res.response.educationDescription;
  const workTitle = res.response.workTitle;
  const companyName = res.response.companyName;
  const companyLocation = res.response.companyLocation;
  const employmentType = res.response.employmentType;
  const workStartDate = res.response.workStartDate;
  const workEndDate = res.response.workEndDate;
  const jobDescription = res.response.jobDescription;
  const skills = res.response.skills;
  const projects = res.response.gitHub;
  return (
    <div className="preview">
      <div className="personalContainer">
        <div
          className="personPhoto"
          style={{
            backgroundImage: `url(${avatar}) `,
            backgroundSize: 140,
            borderRadius: 100,
            height: 140,
            width: 140,
            display: 'inline-block',
          }}
        ></div>
        <div className="titleAndName"></div>
        <div className="name">{name}</div>
        <div className="workTitle">{workTitle}</div>
        <div className="icons">
          <FontAwesomeIcon className="iconn1" icon={faMapMarkerAlt} size="2x" color="#082371" />
          <FontAwesomeIcon className="iconn2" icon={faPhoneAlt} size="2x" color="#082371" />
          <FontAwesomeIcon className="iconn3" icon={faEnvelope} size="2x" color="#082371" />
          <FontAwesomeIcon className="iconn4" icon={faGlobeEurope} size="2x" color="#082371" />
        </div>
        <div className="personalInfo">
          <div className="info">
            {city}, {country}
          </div>
          <div className="info">{phone}</div>
          <div className="info">{email}</div>
          <div className="info">{website}</div>
        </div>
        <div className="about">{about}</div>
      </div>
      <div className="titleWrapper">
        <img className="numberIcon" src="https://i.ibb.co/mCtK3Df/Component-19-1.png" alt="1" />
        <div className="title1">Work Experience</div>
      </div>
      <div className="workContainer">
        <div className="workInfo">
          <div className="job">
            <strong>Job title:</strong> {workTitle}
          </div>
          <div className="job">
            <strong>Employment type:</strong> {employmentType}
          </div>

          <div className="job">
            <strong>Company:</strong> {companyName}
          </div>
          <div className="job">
            <strong>Start date: </strong>
            {workStartDate}
          </div>
          <div className="job">
            <strong>Company location:</strong> {companyLocation}
          </div>
          <div className="job">
            <strong>End date: </strong>
            {workEndDate}
          </div>
          <div className="job">
            <strong>Description: </strong>
            <br />
            {jobDescription}
          </div>
        </div>
      </div>
      <div className="titleWrapper">
        <img className="numberIcon" src="https://i.ibb.co/F7cPfLS/Component-20-1.png" alt="2" />
        <div className="title1">Education</div>
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
        <img className="numberIcon" src="https://i.ibb.co/FHJgrLJ/Component-19-1.png" alt="3" />
        <div className="title1">Skills</div>
      </div>
      <div className="workContainer">
        <div className="workInfo">
          <div className="job">
            <strong>Skills:</strong> {skills}
          </div>
        </div>
      </div>
      <div className="titleWrapper">
        <img className="numberIcon" src="https://i.ibb.co/BC6yWg6/Component-20-1.png" alt="4" />
        <div className="title1">Projects</div>
      </div>

      {projects.map(function(repo) {
        const repoTitle = repo.title;
        const repoDescription = repo.description;
        const repoDeployedSite = repo.deployedSite;
        const repoPhoto = repo.photo;
        return (
          <div>
            <div className="workContainer">
              <div className="workInfo">
                <div className="job">
                  <strong>Photo:</strong> <img src={repoPhoto} alt=""></img>
                </div>
                <div className="job">
                  <strong>Name:</strong> {repoTitle}
                </div>
                <div className="job">
                  <strong>Description:</strong> {repoDescription}
                </div>
                <div className="job">
                  <strong>Deployed site:</strong>
                  <a href={repoDeployedSite}> {repoDeployedSite} </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Preview;
