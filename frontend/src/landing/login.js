import React, { useState } from 'react';
import axios from 'axios';
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
          localStorage.setItem('token', e.data.token);

          localStorage.setItem('username', e.data.user.username);
          localStorage.setItem('ID', e.data.user.id);

          setLoggedIn(true);
          console.log(e.data.token);
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
        <Redirect to="/auth/dashboard" />
      ) : (
        <div>
          <div className="headerSignUp">
            <div className="leftSide">
              <a href="/">
                <img src="https://i.ibb.co/cDXz5vG/logo.png" alt="logo" border="0" />
              </a>
              <div className="rightTop">
                <ul className="navMenu">
                  <a href="/">
                    <li className="menuItem">Home</li>
                  </a>
                  <li className="menuItem">About us</li>
                  <li className="menuItem">Contact us</li>
                </ul>
                <button className="loginInButton">Login in</button>
                <a href="/signup">
                  {' '}
                  <button className="signUpButton">Get started</button>
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
                <div className="signUpText">Sign in</div>
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
                <br></br>
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
