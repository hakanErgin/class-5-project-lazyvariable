import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import SignUp from './components/signUp'
import Nav from './nav/navigation'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/signup" component={SignUp} />
      <Route path="/nav" component={Nav} />

    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
