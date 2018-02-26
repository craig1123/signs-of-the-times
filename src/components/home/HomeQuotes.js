import React, { PureComponent } from 'react';
import quotes from './../../assets/quotes';
import shuffle from './../../utils/shuffle';

const currentIndex = {};

export default class HomeQuotes extends PureComponent {
  constructor(props) {
    super(props);
    this.guid = 0;
    if (!currentIndex[this.guid]) currentIndex[this.guid] = 0;
    const shuffledQuotes = shuffle(quotes);
    this.state = {
      quotes: shuffledQuotes,
      quote: shuffledQuotes[currentIndex[this.guid]],
      show: true,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.changeQuote, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getOpacity = () => ({
    opacity: this.state.show ? 1 : 0,
  })

  changeQuote = () => {
    currentIndex[this.guid]++; // eslint-disable-line

    if (!this.state.quotes[currentIndex[this.guid]]) { // reset
      this.guid = 0;
      currentIndex[this.guid] = 0;
    }

    this.setState({ show: false });
    setTimeout(() => {
      this.setState({
        quote: this.state.quotes[currentIndex[this.guid]],
        show: true,
      });
    }, 1000);
  }

  render() {
    return (
      <div className="text-container">
        <h2 className="signs-hero-text" style={this.getOpacity()}>
          {this.state.quote}
        </h2>
      </div>
    );
  }
}
