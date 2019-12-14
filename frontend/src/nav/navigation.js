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

import { Menu, Layout } from 'antd'



const { Header, Footer, Sider, Content } = Layout;


const Nav = () => {

  const Logout = () => { return ('logout') }

  return (
    <div>
      <Router>
        <Layout>
          <Sider theme="light" style={{ paddingTop: 40 }}>
            <Menu selectable={false} mode="vertical">
              <Menu.ItemGroup title="HERE: Gitpro and logo" />
              <Menu.ItemGroup title="HERE: Person and Icon">
                <Menu.Item><Link to="/nav/dashboard/personal">Dashboard</Link></Menu.Item>
                <Menu.Item><Link to="/nav/profile">Profile</Link></Menu.Item>
                <Menu.Item><Link to="/nav/settings">Settings</Link></Menu.Item>
                <Menu.Item><Link to="/nav/logout">Logout</Link></Menu.Item>
              </Menu.ItemGroup>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', margin: 10 }}>Header</Header>
            <Content style={{ margin: 10 }}>
              <Switch>
                <Route path="/nav/dashboard"><Dashboard /></Route>
                <Route path="/nav/profile"><Profile /></Route>
                <Route path="/nav/settings"><Settings /></Route>
                <Route path="/nav/logout"><Logout /></Route>
              </Switch>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Router>
    </div>
  )


}

export default Nav;


  // return (
  //   <Router>
  //     <div>
  //         <Col span={17} push={6}>
  //           <Switch>
  //             <Route path="/nav/dashboard"><Dashboard /></Route>
  //             <Route path="/nav/profile"><Profile /></Route>
  //             <Route path="/nav/settings"><Settings /></Route>
  //             <Route path="/nav/logout"><Logout /></Route>
  //           </Switch>
  //         </Col>
  //         <Col span={5} pull={17}>
  //           <Menu selectable={false} mode="vertical">
  //             <Menu.ItemGroup title="HERE: Gitpro and logo" />
  //             <Menu.ItemGroup title="HERE: Person and Icon">
  //               <Menu.Item><Link to="/nav/dashboard/personal">Dashboard</Link></Menu.Item>
  //               <Menu.Item><Link to="/nav/profile">Profile</Link></Menu.Item>
  //               <Menu.Item><Link to="/nav/settings">Settings</Link></Menu.Item>
  //               <Menu.Item><Link to="/nav/logout">Logout</Link></Menu.Item>
  //             </Menu.ItemGroup>
  //           </Menu>
  //         </Col>
  //     </div>
  //   </Router>
  // )
