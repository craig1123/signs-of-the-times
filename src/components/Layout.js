import React from 'react';
import Link from 'react-router-dom/Link';

const Layout = props => (
  <section className="container">
    <div className="layout">
      {props.children}
    </div>
    <span style={feedBack}>
      See an error? <Link to="/contact">Give Feedback</Link>
    </span>
    <div style={clear} />
  </section>
);

const feedBack = { float: 'right' };
const clear = { clear: 'both' };

export default Layout;
