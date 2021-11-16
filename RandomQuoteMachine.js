// 1. import React ReactDOM
// 2. get the API url
// 3. create the layout (box + inner content)
// 4. add event listeners
// 5. style
// 6. complete user stories

const API =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

class App extends React.Component {
  state = {
    quotes: [
      {
        quote:
          "Life isn’t about getting and having, it’s about giving and being.",
        author: "Kevin Kruse"
      }
    ],
    index: 0
  };

  componentDidMount() {
    // call the API and update state
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          quotes: res.quotes
        });
        this.getRandomIndex;
      });
  }

  getRandomIndex = () => {
    const { quotes } = this.state;

    if (quotes.length > 0) {
      const index = Math.floor(Math.random() * quotes.length);
      this.setState({
        index
      });
    }
  };

  render() {
    const { quotes, index } = this.state;

    const quote = quotes[index];

    const tweetURL = `https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`;

    return (
      <div className="wrapper d-flex align-items-center justify-content-center">
        <div className="col-8 box p-4 rounded" id="quote-box">
          {quote && (
            <div className="mb-4">
              <p id="text">{quote.quote}</p>
              <strong>
                <cite className="d-block text-right" id="author">
                  {" "}
                  - {quote.author}
                </cite>
              </strong>
            </div>
          )}
          <div className="d-flex justify-content-between">
            <a
              className="btn btn-sm btn-primary btn-rounded"
              target="_blank"
              href={tweetURL}
              id="tweet-quote"
            >
              <i className="fab fa-twitter"></i>
              tweet
            </a>
            <button
              className="btn btn-success btn-rounded"
              onClick={this.getRandomIndex}
              id="new-quote"
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("App"));
