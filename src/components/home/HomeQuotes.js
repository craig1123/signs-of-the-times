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
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.changeQuote, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeQuote = () => {
    currentIndex[this.guid]++; // eslint-disable-line

    if (!this.state.quotes[currentIndex[this.guid]]) { // reset
      this.guid = 0;
      currentIndex[this.guid] = 0;
    }

    this.setState({
      quote: this.state.quotes[currentIndex[this.guid]],
    });
  }

  render() {
    return (
      <div className="text-container">
        <h2 className="signs-hero-text">{this.state.quote}</h2>
      </div>
    );
  }
}
