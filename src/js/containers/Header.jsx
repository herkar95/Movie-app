import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';

class Header extends Component {
  // API request to OMDb
  handleSearchRequest = (e) => {
    e.preventDefault();
    const { searchQuery, onSearchRequest } = this.props;
    Axios.get(
      'https://www.omdbapi.com/?apikey=83d7041f&plot=short&s=' + searchQuery
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
        onSearchRequest(movies, true);
      })
      .catch(() => {
        const errorMessage =
          searchQuery.trim().length < 3
            ? 'Search query must be at least three characters long!'
            : 'No movies found. Try searching for something else!';
        onSearchRequest([], false, errorMessage);
      });
  };

  render() {
    const { onUpdateQuery, displayError, errorMessage } = this.props;
    return (
      <>
        <div id='header' className='text-center mt-4'>
          <div className='row justify-content-center'>
            <span className='col-12'>
              <img
                src={require('../../images/icons/header-logo.png')}
                alt='Logo'
                title='Logo'
                className='logo'
              />
            </span>
            <h1 className='align-self-center mt-4 display-4'>OMDb API Call</h1>
          </div>
          <form
            className='d-flex mt-3 col-12 col-lg-10 justify-content-center mx-auto p-0'
            onSubmit={(e) => this.handleSearchRequest(e)}
          >
            <div className='col-12 row justify-content-center p-0'>
              <input
                type='text'
                name='title'
                placeholder='Search for a movie, series or game'
                className='col-12 col-md-7 form-control mr-md-2 '
                autoFocus
                onChange={(e) => onUpdateQuery(e.target.value)}
              />
              <input
                type='submit'
                value='Search'
                className='btn mt-2 mt-md-0 col-12 col-md-4'
              />
            </div>
          </form>
          <p className={displayError ? 'd-block text-danger mt-4' : 'd-none'}>
            {errorMessage}
          </p>
        </div>
      </>
    );
  }
}

// Proptypes
Header.propTypes = {
  onSearchRequest: Proptypes.func.isRequired,
  onUpdateQuery: Proptypes.func.isRequired,
  displayError: Proptypes.bool.isRequired,
  errorMessage: Proptypes.string.isRequired,
  searchQuery: Proptypes.string.isRequired,
};

export default Header;
