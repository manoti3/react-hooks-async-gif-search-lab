// GifSearch.js
import React, { Component } from 'react';

class GifSearch extends Component {
  constructor() {
    super();

    this.state = {
      query: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search Gifs:
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default GifSearch;