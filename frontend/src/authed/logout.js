import React, { useEffect } from 'react';

const LogoutComponent = () => {
  useEffect(() => {
    localStorage.clear()((window.location.href = 'http://localhost:3000'));
    return () => {};
  });
  return (
    <div>
      <h1>
        Go to <a href="http://localhost:3000">home</a>
      </h1>
    </div>
  );
};
export default LogoutComponent;
