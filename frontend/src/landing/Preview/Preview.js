import React from 'react';
// import ReactDOM from 'react-dom';
// import './Preview.css'; // here is where the magic happens

import { Timeline, Icon, Divider, Card, Col, Row } from 'antd';


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
  const res = useFetch(`http://mighty-reaches-37532.herokuapp.com/user/${localStorage.getItem('ID')}`);
  // const res = useFetch(`http://localhost:5000/user/5dfa7169950137091e4a67f2`);

  if (!res.response) {
    return null;
  }

  const email = res.response.email;
  const name = res.response.name;
  // const picture = res.response.picture;
  const phone = res.response.phone;
  const country = res.response.country;
  const city = res.response.city;
  const institution = res.response.institution;
  const fieldOfStudy = res.response.fieldOfStudy;
  const educationStartDate = res.response.educationStartDate;
  const degree = res.response.degree;
  const educationEndDate = res.response.educationEndDate;
  const workTitle = res.response.workTitle;
  const companyName = res.response.companyName;
  const companyLocation = res.response.companyLocation;
  const employmentType = res.response.employmentType;
  const workStartDate = res.response.workStartDate;
  const workEndDate = res.response.workEndDate;
  const jobDescription = res.response.jobDescription;
  const skills = res.response.skills;

  // const gitHubTitle1 = res.response.gitHub[0].title;
  // const gitHubDescription1 = res.response.gitHub[0].gitHubDescription1;
  // const gitHubRepository1 = res.response.gitHub[0].gitHubRepository1;

  // const gitHubTitle2 = res.response.gitHub[1].title2;
  // const gitHubDescription2 = res.response.gitHub[1].gitHubDescription2;
  // const gitHubRepository2 = res.response.gitHub[1].gitHubRepository2;

  // const gitHubTitle3 = res.response.gitHub[2].title3;
  // const gitHubDescription3 = res.response.gitHub[2].gitHubDescription3;
  // const gitHubRepository3 = res.response.gitHub[2].gitHubRepository3;

  return (
    <div className="preview" style={{ textAlign: 'center' }}>
      <div className="prev profile_preview">
        <div className="prev-info personal-info">
          <Divider><h2>Personal Info</h2></Divider>
          <div style={{ background: '#72A0C1', padding: '30px' }}>
            <Row type="flex" justify="center" align="middle" gutter={[16, 16]}>
              <Col span={8}>
                <Card title="My name:" bordered={false}>
                  {name}
                </Card>
              </Col>
              <Col span={8}>
                <Card title="My email adress" bordered={false}>
                  {email}
                </Card>
              </Col>
              <Col span={8}>
                <Card title="My telephone number:" bordered={false}>
                  {phone}
                </Card>
              </Col>
              <Col span={8}>
                <Card title="My city:" bordered={false}>
                  {city}
                </Card>
              </Col>
              <Col span={8}>
                <Card title="My country:" bordered={false}>
                  {country}
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <div className="prev-info education-info">
          <Divider><h2>Education Info</h2></Divider>
          <div style={{ background: '#84DE02', padding: '30px' }}>
            <Row type="flex" justify="center" align="middle" gutter={[16, 16]}>
              <Col span={8}>
                <Card title="Instituon:" bordered={false}>
                  {institution}
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Field Of Study:" bordered={false}>
                  {fieldOfStudy}
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Degree:" bordered={false}>
                  {degree}
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Start Date:" bordered={false}>
                  {educationStartDate}
                </Card>
              </Col>
              <Col span={8}>
                <Card title="End Date:" bordered={false}>
                  {educationEndDate}
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <div className="prev-info experience-info">
          <Divider><h2>Experience</h2></Divider>
          <div style={{ background: '#E52B50', padding: '30px' }}>
            <Row type="flex" justify="center" align="middle" gutter={[16, 16]}>
              <Col span={8}>
                <Card title="Title:" bordered={false}>
                  {workTitle}
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Company:" bordered={false}>
                  {companyName}
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Location Of Compan:" bordered={false}>
                  {companyLocation}
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Type of Employment:" bordered={false}>
                  {employmentType}
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Start Date:" bordered={false}>
                  {workStartDate}
                </Card>
              </Col>
              <Col span={8}>
                <Card title="End Date:" bordered={false}>
                  {workEndDate}
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Description of Job:" bordered={false}>
                  {jobDescription}
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <div>
          <Divider><h2>Timeline</h2></Divider>
          <Timeline mode="alternate">
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
            <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
              </Timeline.Item>
            <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
              Technical testing 2015-09-01
              </Timeline.Item>
          </Timeline>
        </div>
        <div className="prev-info skills-info">
          <Divider><h2>Skills</h2></Divider>
          <div style={{ background: '#4DA6FF', padding: '30px' }}>
            <Row type="flex" justify="center" align="middle" gutter={[16, 16]}>
              <Col span={8}>
                <Card title="My Skills:" bordered={false}>
                  {skills}
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="prev github_preview">
        <div className="prev-info">
          <Divider><h2>Github Preview</h2></Divider>
          <div style={{ background: '#FFBF00', padding: '30px' }}>
            <Row type="flex" justify="center" align="middle" gutter={[16, 16]}>
              <Col span={8}>
                <Card title="Project:" bordered={false}>
                  github
                </Card>
              </Col>
            </Row>
          </div>
          {/* <h3>{gitHubTitle1}</h3>
          <h3>{gitHubDescription1}</h3>
          <h3>{gitHubRepository1}</h3>
          <h3>{gitHubTitle2}</h3>
          <h3>{gitHubDescription2}</h3>
          <h3>{gitHubRepository2}</h3>
          <h3>{gitHubTitle3}</h3>
          <h3>{gitHubDescription3}</h3>
          <h3>{gitHubRepository3}</h3> */}
        </div>
      </div>
    </div>
  );
}
export default Preview;
