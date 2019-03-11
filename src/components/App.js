import React, { useCallback } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Info from '../pages/Info';
import Empty from '../pages/Empty';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Auth from '../pages/Auth';
import { useAuthenticated, status } from '../hooks/useAuthenticated';

import requireAuth from './requireAuth';

function App() {
  const authStatus = useAuthenticated();

  const renderHeader = useCallback(() => (
    <header>
      <Link to="/">
        <button>Home</button>
      </Link>
      {authStatus === status.AUTHENTICATED ? (
        <Link to="/logout">
          <button>Logout</button>
        </Link>
      ) : (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}
      {authStatus === status.AUTHENTICATED && (
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

  if (authStatus === status.PENDING) {
    return <div>Loading...</div>;
  }

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
