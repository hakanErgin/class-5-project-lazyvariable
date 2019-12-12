import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import SignUp from './components/signUp'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/signup" component={SignUp} />

    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
