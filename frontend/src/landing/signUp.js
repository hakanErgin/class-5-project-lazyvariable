import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import REACT_APP_BACKEND_URI from '../helpers/herokuHelper';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [username, setUsername] = useState('');
  const [registered, setRegistered] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const submitForm = () => {
    axios
      .post(`${REACT_APP_BACKEND_URI}/user`, {
        personalFields: { username, email, password }
      })
      .then(e => {
        if (e.data.token) {
          localStorage.setItem('token', e.data.token);
          localStorage.setItem('username', e.data.user.personalFields.username);
          localStorage.setItem('ID', e.data.user.id);

          setRegistered(true);
        } else {
          setRegistered(false);
        }
      })
      .catch(err => {
        setErrorMessage(err.response.data.message);
      });
  };
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = p => {
    setPassword(p.target.value);
  };

  const handleUsernameChange = p => {
    setUsername(p.target.value);
  };

  return (
    <div>
      {registered ? (
        <Redirect to="/auth/dashboard" />
      ) : (
        <div>
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
                <a href="/login">
                  <button>Log in</button>
                </a>
                <a href="/signup">
                  <button disabled={true}>Sign up</button>
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
                <div>Sign up</div>
                <div>GitHub username to import your repositories</div>
                <input
                  type="text"
                  required
                  onChange={handleUsernameChange}
                  value={username}
                ></input>
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
        </div>
      )}
    </div>
  );
};

export default SignUp;
