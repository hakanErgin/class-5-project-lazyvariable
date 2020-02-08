import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <div>
        <div>Easy and free!</div>
        <div>
          Take the first step into your future
          <span>.</span>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/9g9Yp53/Component-19-1.png" alt="element" />
        <div>Create your resume</div>
        <p>Start creating your resume to support your portfolio </p>
        <a href="/auth/profile/personal">
          <button type="submit">Create</button>
        </a>
      </div>
      <div>
        <img src="https://i.ibb.co/cknNkS2/Component-20-1.png" alt="element2" />
        <div>Import your projects</div>
        <p>Retrieve your repositories from GitHub</p>
        <a href="/auth/projects">
          <button type="submit">Import</button>
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
