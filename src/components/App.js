import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Info from './Info';
import Empty from './Empty';
import Login from './Login';
import Logout from './Logout';
import Auth from './Auth';
import requireAuth from './requireAuth';

function App() {
  const [authenticated, updateAuthenticated] = useState(!!window.firebase.auth().currentUser);

  useEffect(() => {
    window.firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        updateAuthenticated(true);
      } else {
        updateAuthenticated(false);
      }
    });
  }, [authenticated]);

  return (
    <Router>
      <div>
        <header>
          <Link to="/">
            <button>Home</button>
          </Link>
          {authenticated ? (
            <Link to="/logout">
              <button>Logout</button>
            </Link>
          ) : (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
          {authenticated && (
            <>
              <Link to="/about">
                <button>About</button>
              </Link>
              <Link to="/info">
                <button>Info</button>
              </Link>
              <Link to="/empty">
                <button>Empty</button>
              </Link>
            </>
          )}
        </header>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/about" component={requireAuth(About)} />
          <Route exact path="/info" component={requireAuth(Info)} />
          <Route exact path="/empty" component={requireAuth(Empty)} />
          <Route exact path="/auth" component={Auth} />
        </div>
      </div>
    </Router>
  );
}

export default App;
