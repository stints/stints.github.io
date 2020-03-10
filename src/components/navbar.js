import React from 'react';

import {Link} from "react-router-dom";

import 'bulma/css/bulma.css';

const Navigation = () => {
  return (
    <header>
      <nav className="bd-navbar navbar has-shadow is-spaced" id="navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src="images/logo.png" alt="John Stinson, Developer" />
            </Link>
        
            <a className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="menu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        
          <div id="menu" className="navbar-menu">
            <div className="navbar-end">
              <Link className="navbar-item" to="/">
                About
              </Link>
              <Link className="navbar-item" to="/experience">
                Experience
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;