import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

import Homepage from './landing/homepage';
import SignUp from './landing/signUp';
import LoggedIn from './authed/main';
import LoginComponent from './landing/login';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

function App() {
  return (
    <Router>
      <div style={{ height: '100%' }}>
        <Route exact path="/" component={Homepage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/auth" component={LoggedIn} />
        <Route path="/login" component={LoginComponent} />
      </div>
    </Router>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
