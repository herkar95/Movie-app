import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';
import Movies from './js/components/Movies';
import Header from './js/containers/Header';

class App extends React.Component {
  state = {
    movies: [],
    searchQuery: '',
    displayError: false,
    errorMessage: '',
  };

  // API request to OMDb
  handleSearchRequest = () => {
    Axios.get(
      'http://www.omdbapi.com/?apikey=83d7041f&plot=short&s=' +
        this.state.searchQuery
    )
      .then((response) => {
        const movies = response.data.Search.map((movie) => {
          movie = { ...movie, isFavorite: false, id: uuidv4() }; // Add custom props
          movie.Type = movie.Type.replace(
            /\b\w/g,
            (l) => l.toUpperCase() //Capitalize first letter
          );
          return movie;
        });
        this.setState({ movies, displayError: false });
      })
      .catch(() => {
        const errorMessage =
          this.state.searchQuery.trim().length < 3
            ? 'Search query must be at least three characters long!'
            : 'No movies found. Try searching for something else!';
        this.setState({ displayError: true, errorMessage, movies: [] });
      });
  };

  // Updates the search query
  handleUpdateQuery = (query) => {
    this.setState({ searchQuery: query });
  };

  // Updates the favorite status of a movie item
  handleFavorite = (id) => {
    const movies = this.state.movies.map((movie) => {
      if (movie.id === id) movie.isFavorite = !movie.isFavorite;
      return movie;
    });
    this.setState({ movies });
  };

  render() {
    return (
      <div className="container">
        <Header
          onSearchRequest={this.handleSearchRequest}
          onUpdateQuery={this.handleUpdateQuery}
          displayError={this.state.displayError}
          errorMessage={this.state.errorMessage}
        />
        <Movies movies={this.state.movies} onFavorite={this.handleFavorite} />
      </div>
    );
  }
}

export default App;
