import React from 'react';
import Link from 'react-router-dom/Link';

const Header = () => {
  const tab = window.location.pathname;
  return (
    <header>
      <h1>
        <Link to="/">Signs Of The Times</Link>
      </h1>
      <nav>
        <Link to="/has-happened" className={`${tab === '/has-happened' ? 'active' : ''}`}>
          Has Happened
        </Link>
        <Link to="/is-happening" className={`${tab === '/is-happening' ? 'active' : ''}`}>
          Is Happening
        </Link>
        <Link to="/will-happen" className={`${tab === '/will-happen' ? 'active' : ''}`}>
          Will Happen
        </Link>
      </nav>
    </header>
  );
};

export default Header;
