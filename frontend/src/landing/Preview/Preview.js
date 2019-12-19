import React from 'react';
// import ReactDOM from 'react-dom';

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
  const res = useFetch(`http://localhost:5000/user/${localStorage.getItem('ID')}`);
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
          <h2>Personal Info</h2>
          <ul>
            <li>
              <h3>My name: </h3>
              <p>{name}</p>
            </li>
            <li>
              <h3>My email adress: </h3>
              <p>{email}</p>
            </li>
            <li>
              <h3>My telephone number: </h3>
              <p>{phone}</p>
            </li>
            <li>
              <h3>My city: </h3>
              <p>{city}</p>
            </li>
            <li>
              <h3>My country: </h3>
              <p>{country}</p>
            </li>
          </ul>
        </div>

        <div className="prev-info education-info">
          <h2>Education Info</h2>
          <ul>
            <li>
              <h3>Instituon: </h3>
              <p>{institution}</p>
            </li>
            <li>
              <h3>Field Of Study: </h3>
              <p>{fieldOfStudy}</p>
            </li>
            <li>
              <h3>Degree: </h3>
              <p>{degree}</p>
            </li>
            <li>
              <h3>Start Date: </h3>
              <p>{educationStartDate}</p>
            </li>
            <li>
              <h3>End Date: </h3>
              <p>{educationEndDate}</p>
            </li>
          </ul>
        </div>

        <div className="prev-info experience-info">
          <h2>Experience</h2>
          <ul>
            <li>
              <h3>Title: </h3>
              <p>{workTitle}</p>
            </li>
            <li>
              <h3>Company: </h3>
              <p>{companyName}</p>
            </li>
            <li>
              <h3>Location Of Company: </h3>
              <p>{companyLocation}</p>
            </li>
            <li>
              <h3>Type of Employment : </h3>
              <p>{employmentType}</p>
            </li>
            <li>
              <h3>Start Date: </h3>
              <p>{workStartDate}</p>
            </li>
            <li>
              <h3>End Date: </h3>
              <p>{workEndDate}</p>
            </li>
            <li>
              <h3>Description of Job: </h3>
              <p>{jobDescription}</p>
            </li>
          </ul>
        </div>

        <div className="prev-info skills-info">
          <h2>Skills</h2>
          <ul>
            <li>
              <h3>My Skills: </h3>
              <p>{skills}</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="prev github_preview">
        <div className="prev-info">
          <h2>Github Preview</h2>
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
