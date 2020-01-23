import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './profile';
import Profile from './dashboard';
//import Settings from './settings';
import LogoutComponent from './logout';
import Projects from './projects';
import Preview from './Preview/Preview';
import GithubComponent from './github';
import Portfolio from './portfolio';

import { Menu, Layout } from 'antd';
// import './profile/customStyle.css';

const { Footer, Sider, Content } = Layout;

const Main = () => {
  const [name, setName] = useState();
  const [avatar, setAvatar] = useState();

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
          <Sider theme="light" style={{ paddingTop: 40 }}>
            <Menu selectable={false} mode="vertical">
              <a href="/">
                <img
                  className="logoDashboard"
                  src="https://i.ibb.co/cDXz5vG/logo.png"
                  alt="element"
                />
              </a>
              <span>
                <div className="userName">{name}</div>
                <div
                  className="userPhoto"
                  style={{
                    backgroundImage: `url(${avatar}) `,
                    backgroundSize: 70,
                    borderRadius: 50,
                    height: 70,
                    width: 70,
                  }}
                ></div>
              </span>
              <Menu.ItemGroup>
                <Menu.Item><Link to="/auth/dashboard">Dashboard</Link></Menu.Item>
                <Menu.Item><Link to="/auth/profile/personal">Profile</Link></Menu.Item>
                <Menu.Item><Link to="/auth/projects">Projects</Link></Menu.Item>
                <Menu.Item><Link to="/auth/preview">Preview</Link></Menu.Item>
                <Menu.Item><Link to="/auth/logout">Logout</Link></Menu.Item>
              </Menu.ItemGroup>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: 10 }}>
              <Switch>
                <Route path="/auth/dashboard"><Profile /></Route>
                <Route path="/auth/profile/personal"><Dashboard /></Route>
                <Route path="/auth/projects"><Projects /></Route>
                <Route path="/auth/preview"><Preview /></Route>
                <Route path="/auth/github"><GithubComponent /></Route>
                <Route path="/auth/portfolio"><Portfolio /></Route>
                <Route path="/auth/logout"><LogoutComponent /></Route>
              </Switch>
            </Content>
            <Footer>
              <div className="footerContainer">
                <img className="logoMin" src="https://i.ibb.co/jgJW3wx/logomin.png" alt="logomin" />
                <div className="copyrightText">All rights are reserved</div>
              </div>
            </Footer>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
};

export default Main;
