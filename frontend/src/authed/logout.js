import React, { useEffect } from 'react';

const LogoutComponent = () => {
  useEffect(() => {
    localStorage.clear()((window.location.href = `${process.env.FIREBASE_URI}`));
    return () => {};
  });
  return (
    <div>
      <h1>
        home
      </h1>
    </div>
  );
};
export default LogoutComponent;
