
import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

import REACT_APP_BACKEND_URI from '../helpers/herokuHelper'

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

          localStorage.setItem('username', e.data.user.username);
          localStorage.setItem('ID', e.data.user.id);
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      })
      .catch(err => {
        setErrorMessage(err.response.statusText)
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
        <Redirect to="/auth/dashboard" />
      ) : (
          <div style={{ paddingTop: 10, paddingLeft: 10 }}>
            <div className="headerSignUp">
              <div className="leftSide">
                <a href="/">
                  <img src="https://i.ibb.co/cDXz5vG/logo.png" alt="logo" border="0" />
                </a>
                <div className="rightTop">
                  <button className="loginInButton" disabled={true}>Log in</button>
                  <a href="/signup">
                    <button className="signUpButton">Sign up</button>
                  </a>
                </div>
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
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    submitForm();
                  }}
                >
                  <div className="signupTitle">Sign in</div>
                  <div className="signUpLabel">Email</div>
                  <input
                    className="signUpInput"
                    type="email"
                    required
                    onChange={handleEmailChange}
                    value={email}
                  ></input>
                  <div className="signUpLabel">Password</div>
                  <input
                    className="signUpInput"
                    type="password"
                    required
                    onChange={handlePasswordChange}
                    value={password}
                  ></input>
                  <br />
                  {errorMessage && <div style={{ paddingTop: "20px", color: "red" }}>{errorMessage}</div>}
                  <button className="signUpSubmit" type="submit">
                    Submit
                </button>
                </form>
              </div>
            </div>

            <footer>
              <div className="footerContainer">
                <img className="logoMin" src="https://i.ibb.co/jgJW3wx/logomin.png" alt="logomin" />
                <div className="copyrightText">All rights are reserved</div>
              </div>
            </footer>
          </div>
        )}
    </div>
  );
};
export default LoginComponent;
