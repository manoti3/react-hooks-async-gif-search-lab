// GifListContainer.js
import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends Component {
  constructor() {
    super();

    this.state = {
      gifs: [],
    };
  }

  componentDidMount() {
    this.fetchGifs();
  }

  fetchGifs = (query = 'funny') => {
    const apiKey = "VtFx05ty1PpSi1Do9k58VFYLCMPv45eK" ;
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=10`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ gifs: data.data });
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  handleSearch = (query) => {
    this.fetchGifs(query);
  };

  render() {
    return (
      <div>
        <GifSearch onSubmit={this.handleSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;