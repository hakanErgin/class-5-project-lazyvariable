import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Menu, Layout } from 'antd';

import '../styles/main.css';

import InputHandler from './main/profile/handlers/InputHandler';
import Dashboard from './main/dashboard';
import Profile from './main/profile';
import LogoutComponent from './main/logout';
import Projects from './main/projects';
import Preview from './main/preview';
import GithubComponent from './main/projects/github';
import Portfolio from './main/projects/portfolio';

const { Sider, Content } = Layout;

const Main = () => {
  const {
    inputs,
    CheckDb,
    postToGithub,
    name,
    avatar,
    setPicAndName
  } = InputHandler();

  useEffect(() => {
    CheckDb();
    setPicAndName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="mainComponent">
      <Router>
        <Layout className="layout">
          <Sider id="sider" theme="light" breakpoint="lg" collapsedWidth="0">
            <Menu id="siderMenu" selectable={false} mode="vertical">
              <div id="name-and-avatar">
                <a href="/auth/dashboard">
                  <img
                    className="logoDashboard"
                    src="https://i.ibb.co/cDXz5vG/logo.png"
                    alt="element"
                  />
                </a>
                <div
                  id="userPhoto"
                  style={{
                    backgroundImage: `url(${avatar}) `
                  }}
                ></div>
                <div id="userName">Hello {name}</div>
              </div>
              <Menu.ItemGroup>
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
          <Layout id="mainLayout">
            <Content id="content">
              <Switch>
                <Route path="/auth/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/auth/profile">
                  <Profile />
                </Route>
                <Route path="/auth/projects">
                  <Projects CheckDb={CheckDb} postToGithub={postToGithub} />
                </Route>
                <Route path="/auth/preview">
                  <Preview avatar={avatar} inputs={inputs} CheckDb={CheckDb} />
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
