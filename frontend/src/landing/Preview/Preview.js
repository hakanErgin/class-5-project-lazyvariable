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
    return <div>Loading...</div>;
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
    <div style={{ textAlign: 'center' }}>
      <h3>{name} </h3>
      <h3>{email}</h3>
      <h3> {city}</h3>
      <h3> {phone}</h3>
      <h3> {country}</h3>
      <h3>{institution}</h3>
      <h3>{fieldOfStudy}</h3>
      <h3>{degree}</h3>
      <h3>{educationStartDate}</h3>
      <h3>{educationEndDate}</h3>
      <h3>{workTitle}</h3>
      <h3>{companyName}</h3>
      <h3>{companyLocation}</h3>
      <h3>{employmentType}</h3>
      <h3>{workStartDate}</h3>
      <h3>{workEndDate}</h3>
      <h3>{jobDescription}</h3>
      <h3>{skills}</h3>

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
  );
}
export default Preview;