import React, { Component } from 'react';
import Layout from './Layout';

export default class SpecificTopic extends Component {
  state = { }

  render() {
    console.log(this.props);
    return (
      <Layout>
          hi
      </Layout>
    );
  }
}
