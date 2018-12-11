import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const PENDING = 'PENDING';
const AUTHENTICATED = 'AUTHENTICATED';
const UNAUTHENTICATED = 'UNAUTHENTICATED';
const ERROR = 'ERROR';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
});

const onClick = () => {
  const provider = new firebase.auth.GithubAuthProvider();
  provider.setCustomParameters({
    allow_signup: true
  });
  firebase.auth().signInWithRedirect(provider);
};

function Login() {
  const [auth, setAuth] = useState(PENDING);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (auth !== AUTHENTICATED) {
      firebase
        .auth()
        .getRedirectResult()
        .then(result => {
          if (result.user === null) {
            setAuth(UNAUTHENTICATED);
            return;
          }

          setAuth(AUTHENTICATED);
          setUser(result.user);
        })
        .catch(error => {
          if (error) {
            setAuth(ERROR);
            return;
          }
        });
    }
  });

  return (
    <React.Fragment>
      <div className="really-big">Login</div>
      {auth === UNAUTHENTICATED && (
        <div>
          {"You're not authenticated."} <button onClick={onClick}>Click here to log in</button>
        </div>
      )}
      {auth === AUTHENTICATED && user !== null && (
        <div>
          <div>
            <b>Name: </b> {user.displayName}
          </div>
          <div>
            <b>Email: </b> {user.email}
          </div>
          <div>
            <img
              style={{ width: 100, borderRadius: '100%' }}
              src={user.photoURL}
              alt={user.displayName}
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

Login.propTypes = {};

export default Login;
