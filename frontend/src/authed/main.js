import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Dashboard from './dashboard';
import Profile from './profile';
import Settings from './settings';
import Logout from '../landing/logout';

import { Menu, Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const Main = () => {
  return (
    <div>
      <Router>
        <Layout>
          <Sider theme="light" style={{ paddingTop: 40 }}>
            <Menu selectable={false} mode="vertical">
              <Menu.ItemGroup title="HERE: Gitpro and logo" />
              <Menu.ItemGroup title="HERE: Person and Icon">
                <Menu.Item>
                  <Link to="/auth/dashboard/personal">Dashboard</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/auth/profile">Profile</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/auth/settings">Settings</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/auth/logout">Logout</Link>
                </Menu.Item>

              </Menu.ItemGroup>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', margin: 10 }}>Header</Header>
            <Content style={{ margin: 10 }}>
              <Switch>
                <Route path="/auth/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/auth/profile">
                  <Profile />
                </Route>
                <Route path="/auth/settings">
                  <Settings />
                </Route>
                <Route path="/auth/logout">
                  <Logout />
                </Route>
              </Switch>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
};

export default Main;
