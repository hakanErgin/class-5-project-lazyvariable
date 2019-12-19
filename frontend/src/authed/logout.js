import React, { useEffect } from 'react';
import { Redirect } from 'react-router';

const LogoutComponent = () => {
  useEffect(() => {
    localStorage.clear();
    return () => { };
  });
  alert('Logged out!')
  return <Redirect to="/" />;
};
export default LogoutComponent;
