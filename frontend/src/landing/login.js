import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

import REACT_APP_BACKEND_URI from '../helpers/herokuHelper';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  function submitForm() {
    axios
      .post(`${REACT_APP_BACKEND_URI}/auth`, { email, password })
      .then(e => {
        if (e.data.token) {
          localStorage.setItem('token', e.data.token);
          localStorage.setItem('username', e.data.user.personalFields.username);
          localStorage.setItem('ID', e.data.user.id);
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      })
      .catch(err => {
        setErrorMessage(err.response.statusText);
      });
  }
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = p => {
    setPassword(p.target.value);
  };

  return (
    <div className="loginSignin">
      {loggedIn ? (
        <Redirect to="/auth/dashboard" />
      ) : (
        <div>
          <div>
            <a href="/">
              <img
                src="https://i.ibb.co/cDXz5vG/logo.png"
                alt="logo"
                border="0"
              />
            </a>
            <div>
              <button disabled={true}>Log in</button>
              <a href="/signup">
                <button>Sign up</button>
              </a>
            </div>
            <div>
              <div>Easy and free!</div>
              <div>
                Take the first step
                <br />
                into your future<span>.</span>
              </div>
            </div>
          </div>
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                submitForm();
              }}
            >
              <div>Sign in</div>
              <div>Email</div>
              <input
                type="email"
                required
                onChange={handleEmailChange}
                value={email}
              ></input>
              <div>Password</div>
              <input
                type="password"
                required
                onChange={handlePasswordChange}
                value={password}
              ></input>
              <br />
              {errorMessage && (
                <div style={{ color: 'red' }}>{errorMessage}</div>
              )}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default LoginComponent;
