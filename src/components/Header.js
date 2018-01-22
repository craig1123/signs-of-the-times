import React from 'react';
import Link from 'react-router-dom/Link';

const Header = () => (
  <header>
    <Link to="/">
      <h1>Signs Of The Times</h1>
    </Link>
    <nav>
      <Link to="/has-happened" style={margin}>
        Has Happened
      </Link>
      <Link to="/is-happening" style={margin}>
        Is Happening
      </Link>
      <Link to="/will-happen" style={margin}>
        Will Happen
      </Link>
    </nav>
  </header>
);

const margin = { margin: '0 5px' };

export default Header;
