import { useEffect } from 'react';

const LogoutComponent = () => {
  useEffect(() => {
    localStorage.clear()((window.location.href = `/`));
    return () => { };
  });
  return (
    null);
};
export default LogoutComponent;
