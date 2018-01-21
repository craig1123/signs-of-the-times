import React, { Component } from 'react';

export default class FourOFour extends Component {
  static defaultProps = {
    message: 'The sign you looked for could not be found',
  }
  state = { }

  render() {
    const { message } = this.props;
    return (
      <div className="four-o-four">
        <h1>404 Not Found</h1>

        <p>{message}</p>

      </div>
    );
  }
}
