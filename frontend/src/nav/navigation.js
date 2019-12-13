import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './dashboard/dashboard'
import Profile from './profile'
import Settings from './settings'

import { Menu, Row, Col } from 'antd'
import 'antd/dist/antd.css'

const Nav = () => {

  return (
    <Router>
      <div>
        <Row>
      <Col span={17} push={6}>
        <Switch>
          <Route path="/nav/dashboard"><Dashboard /></Route>
          <Route path="/nav/profile"><Profile /></Route>
          <Route path="/nav/settings"><Settings /></Route>
        </Switch>
      </Col>
      <Col span={5} pull={17}>
        <Menu mode="vertical">
          <Menu.ItemGroup title="HERE: Gitpro and logo" />
          <Menu.ItemGroup title="HERE: Person and Icon">
            <Menu.Item><Link to="/nav/dashboard">Dashboard</Link></Menu.Item>
            <Menu.Item><Link to="/nav/profile">Profile</Link></Menu.Item>
            <Menu.Item><Link to="/nav/settings">Settings</Link></Menu.Item>
            <Menu.Item><Link to="/nav/logout">Logout</Link></Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </Col>
    </Row>
      </div>
    </Router>
  )
}

export default Nav;
