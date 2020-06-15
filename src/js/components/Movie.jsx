import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Movie extends Component {
  render() {
    const {
      Poster,
      Title,
      imdbID,
      Type,
      Year,
      id,
      isFavorite,
    } = this.props.movie;
    return (
      <>
        <div className='d-flex row col-12 px-0 mx-0'>
          <div className='col-12 d-flex flex-column text-center justify-content-between order-2 p-0 my-4 col-md-6 order-md-1'>
            <div>
              <h1>{Title}</h1>
              <p className='text-secondary item-details'>
                {
                  <i
                    className={
                      Type === 'Game' ? 'fas fa-gamepad' : 'fas fa-video'
                    }
                    title='Type'
                  ></i>
                }
                {Type}
              </p>
              <p className='text-secondary item-details'>
                {<i className='fas fa-calendar-alt' title='Released in'></i>}
                {Year}
              </p>
              <div className='favorites mb-2'>
                <i
                  className={isFavorite ? 'fas fa-heart' : 'far fa-heart'}
                  title={
                    isFavorite ? 'Remove from favorites' : 'Add to favorites'
                  }
                  onClick={() => this.props.onFavorite(id)}
                ></i>
              </div>
            </div>

            <div className='button_cont text-center'>
              <a
                className='btn'
                href={'https://www.imdb.com/title/' + imdbID}
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-imdb'></i>Read more on IMDb
              </a>
            </div>
          </div>
          <div className='class=col-12 d-flex flex-column order-1 p-0 my-4 col-md-6 img-container'>
            <img
              src={
                Poster === 'N/A'
                  ? require('../../images/no-poster.jpg')
                  : Poster
              }
              alt={Title}
              title={Title}
              className='rounded shadow align-self-center'
            />
          </div>
        </div>
      </>
    );
  }
}

//Proptypes
Movie.propTypes = {
  movie: Proptypes.object.isRequired,
  onFavorite: Proptypes.func.isRequired,
};

export default Movie;
