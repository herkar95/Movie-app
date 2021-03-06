import React, { Component } from 'react';
import Movie from './Movie';
import Proptypes from 'prop-types';

class Movies extends Component {
  render() {
    const { movies, onFavorite } = this.props;
    return (
      <div className='col-10 mx-auto mt-4 movies-container p-0'>
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.id} onFavorite={onFavorite} />
        ))}
      </div>
    );
  }
}

// Proptypes
Movies.propTypes = {
  movies: Proptypes.array.isRequired,
  onFavorite: Proptypes.func.isRequired,
};

export default Movies;
