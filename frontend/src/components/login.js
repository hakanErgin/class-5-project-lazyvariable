import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, Button } from 'antd';
import { Redirect } from 'react-router';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  function submitForm() {
    axios
      .post('http://localhost:5000/auth', { email, password })
      .then(e => {
        if (e.data.token) {
          localStorage.setItem("token", e.data.token);
          setLoggedIn(true);
          console.log(e.data.token)
        } else {
          setLoggedIn(false);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = p => {
    setPassword(p.target.value);
  };  
  

  return (
    <div>
      {loggedIn ? (
        <Redirect to="/" />
      ) : (
        <form
          onSubmit={e => {
            e.preventDefault();
            submitForm();
          }}
        >
          <Input placeholder="input email" onChange={handleEmailChange} value={email} />
          <Input.Password
            placeholder="input password"
            onChange={handlePasswordChange}
            value={password}
          />
          <Button htmlType={'submit'}>Submit</Button>
        </form>
      )}
    </div>
  );
};
export default LoginComponent;
