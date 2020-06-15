import React from 'react';
import Movies from './js/components/Movies';
import Header from './js/containers/Header';

class App extends React.Component {
  state = {
    movies: [],
    searchQuery: '',
    displayError: false,
    errorMessage: '',
  };

  // Handles state update after API request is finished
  handleSearchRequest = (movies, success, errorMessage = '') => {
    if (success) this.setState({ movies, displayError: false });
    else this.setState({ displayError: true, errorMessage, movies: [] });
  };

  // Updates the search query
  handleUpdateQuery = (searchQuery) => {
    this.setState({ searchQuery });
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
    const { displayError, errorMessage, searchQuery, movies } = this.state;
    return (
      <div className='container'>
        <Header
          onSearchRequest={this.handleSearchRequest}
          onUpdateQuery={this.handleUpdateQuery}
          displayError={displayError}
          errorMessage={errorMessage}
          searchQuery={searchQuery}
        />
        <Movies movies={movies} onFavorite={this.handleFavorite} />
      </div>
    );
  }
}

export default App;
