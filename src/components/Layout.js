import React from 'react';

const Layout = props => (
  <section className="container">
    <div className="layout">
      {props.children}
    </div>
  </section>
);

export default Layout;
