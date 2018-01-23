import React, { Component } from 'react';
import Layout from './Layout';

export default class FourOFour extends Component {
  static defaultProps = {
    message: 'The sign you looked for could not be found',
  }
  state = { }

  render() {
    const { message } = this.props;
    return (
      <Layout>
        <h1>404 Not Found</h1>

        <p>{message}</p>
      </Layout>
    );
  }
}
