import React from 'react';
import './profile/customStyle.css';

const Dashboard = () => {
  return (
    <div>
      <div className="headerSignUp">
        <div className="leftSide">
          <div className="titleSection">
            <div className="subTitle">Easy and free!</div>
            <div className="title">
              Take the first step
              <br />
              into your future<span className="titleEndPoint">.</span>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="steps">
            <img className="iconNumber" src="https://i.ibb.co/9g9Yp53/Component-19-1.png" />

            <div className="signUpText">Create your resume</div>
            <p className="paraTitle">Start creating your resume to support your portfolio </p>
            <a href="/auth/profile/personal">
              <button className="signUpSubmit" type="submit">
                Create
              </button>
            </a>
          </div>
          <div className="steps2">
            <img className="iconNumber" src="https://i.ibb.co/cknNkS2/Component-20-1.png" />

            <div className="signUpText">Import your projects</div>
            <p className="paraTitle">Retrieve your repositories from GitHub</p>

            <a href="/auth/projects">
              <button className="signUpSubmit" type="submit">
                Import
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
