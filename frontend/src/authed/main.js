import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import useSignUpForm from './profile/handlers/InputHooks';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './dashboard';
import Profile from './profile';
import LogoutComponent from './logout';
import Projects from './projects';
import Preview from './Preview/Preview';
import GithubComponent from './github';
import Portfolio from './portfolio';
import { Menu, Layout } from 'antd';

const { Sider, Content } = Layout;

const Main = () => {
  const [name, setName] = useState();
  const [avatar, setAvatar] = useState();

  const { inputs, CheckDb, postToGithub } = useSignUpForm();
  console.log('inputs', inputs);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${localStorage.getItem('username')}`)
      .then(result => {
        setName(result.data.name);
        setAvatar(result.data.avatar_url);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="alles">
      <Router>
        <Layout>
          <Sider theme="light" style={{ paddingTop: 10, paddingLeft: 10 }}>
            <Menu selectable={false} mode="vertical">
              <div>
                <a href="/">
                  <img
                    className="logoDashboard"
                    src="https://i.ibb.co/cDXz5vG/logo.png"
                    alt="element"
                  />
                </a>
              </div>
              <div>
                <div
                  className="userPhoto"
                  style={{
                    backgroundImage: `url(${avatar}) `,
                    backgroundSize: 70,
                    borderRadius: 50,
                    height: 70,
                    width: 70
                  }}
                ></div>
                <div className="userName" style={{ lineHeight: 2 }}>
                  Hello {name}
                </div>
              </div>
              <Menu.ItemGroup>
                <Menu.Item>
                  <Link to="/auth/dashboard">Dashboard</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/auth/profile/personal">Profile</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/auth/projects">Projects</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/auth/preview">Preview</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/auth/logout">Logout</Link>
                </Menu.Item>
              </Menu.ItemGroup>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: 10 }}>
              <Switch>
                <Route path="/auth/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/auth/profile/personal">
                  <Profile />
                </Route>
                <Route path="/auth/projects">
                  <Projects postToGithub={postToGithub} />
                </Route>
                <Route path="/auth/preview">
                  <Preview />
                </Route>
                <Route path="/auth/github">
                  <GithubComponent />
                </Route>
                <Route path="/auth/portfolio">
                  <Portfolio
                    CheckDb={CheckDb}
                    inputs={inputs}
                    postToGithub={postToGithub}
                  />
                </Route>
                <Route path="/auth/logout">
                  <LogoutComponent />
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
};

export default Main;
