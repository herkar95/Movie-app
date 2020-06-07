import React, { Component } from 'react';
import Movie from './Movie';

class Movies extends Component {
  render() {
    return (
      <div className="col-10 mx-auto mt-4 movies-container">
        {this.props.movies.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    );
  }
}

export default Movies;
