import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import REACT_APP_BACKEND_URI from "../helpers/herokuHelper";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [username, setUsername] = useState("");
  const [registered, setRegistered] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = () => {
    axios
      .post(`${REACT_APP_BACKEND_URI}/user`, {
        personalFields: { username, email, password }
      })
      .then(e => {
        console.log("EEEEEE", e);
        if (e.data.token) {
          localStorage.setItem("token", e.data.token);
          localStorage.setItem("username", e.data.user.personalFields.username);
          localStorage.setItem("ID", e.data.user.id);

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
        <div style={{ paddingTop: 10, paddingLeft: 10 }}>
          <div className="headerSignUp">
            <div className="leftSide">
              <a href="/">
                <img
                  src="https://i.ibb.co/cDXz5vG/logo.png"
                  alt="logo"
                  border="0"
                />
              </a>
              <div className="rightTop">
                <a href="/login">
                  <button className="loginInButton">Log in</button>
                </a>
                <a href="/signup">
                  <button className="signUpButton" disabled={true}>
                    Sign up
                  </button>
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
                <div className="signupTitle">Sign up</div>
                <div className="signUpLabel">
                  GitHub username to import your repositories
                </div>
                <input
                  className="signUpInput"
                  type="text"
                  required
                  onChange={handleUsernameChange}
                  value={username}
                ></input>
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
                {errorMessage && (
                  <div style={{ paddingTop: "20px", color: "red" }}>
                    {errorMessage}
                  </div>
                )}
                <button className="signUpSubmit" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <footer>
            <div className="footerContainer">
              <img
                className="logoMin"
                src="https://i.ibb.co/jgJW3wx/logomin.png"
                alt="logomin"
              />
              <div className="copyrightText">All rights are reserved</div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default SignUp;
