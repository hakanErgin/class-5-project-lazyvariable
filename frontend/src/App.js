import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from 'firebase'
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import Homepage from "./components/homepage"
// import SignUp from './components/signUp'


const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};


function App() {
  return (
    <div>
      <Homepage />
    </div>

  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
