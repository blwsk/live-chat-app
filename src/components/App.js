import React, { useCallback } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Info from '../pages/Info';
import Empty from '../pages/Empty';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Auth from '../pages/Auth';
import { useAuthenticated } from '../hooks/useAuthenticated';

import requireAuth from './requireAuth';

function App() {
  const authenticated = useAuthenticated();

  const renderHeader = useCallback(() => (
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
  ));

  return (
    <Router>
      <>
        {renderHeader()}
        <>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/about" component={requireAuth(About)} />
          <Route exact path="/info" component={requireAuth(Info)} />
          <Route exact path="/empty" component={requireAuth(Empty)} />
          <Route exact path="/auth" component={Auth} />
        </>
      </>
    </Router>
  );
}

export default App;
