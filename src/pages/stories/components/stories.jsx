import React from 'react';
import Quote from 'pages/stories/components/quote';

import Quotes from 'data/quotes.json';

class Stories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: 0
    };
  }

  renderImages(quoteIndexes) {
    return quoteIndexes.map(index => {
      let bottom = 0;
      if (index === 1) bottom = '75px';
      if (index === 4) bottom = '-75px';

      return (
        <div key={`stories-${index}`} style={{ width: '33%', bottom: bottom }}>
          <button
            className={
              (this.state.currentQuote === index
                ? 'stories-circles__img-container selected '
                : '') + 'stories-circles__img-container center'
            }
            onClick={() => {
              this.setState({ currentQuote: index });
            }}
          >
            <img
              className="stories-circles__img"
              src={Quotes[index].imgSrc}
              alt={Quotes[index].attribution}
            />
          </button>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="stories-circles">
        <div className="stories-circles__top">
          {this.renderImages([0, 1, 2])}
        </div>
        <Quote quote={Quotes[this.state.currentQuote]} />
        <div className="stories-circles__bottom">
          {this.renderImages([3, 4, 5])}
        </div>
      </div>
    );
  }
}

export default Stories;
