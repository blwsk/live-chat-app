import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Info from './Info';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/about">
              <button>About</button>
            </Link>
            <Link to="/info">
              <button>Info</button>
            </Link>
          </header>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/info" component={Info} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
