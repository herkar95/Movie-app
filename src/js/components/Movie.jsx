import React, { Component } from 'react';

class Movie extends Component {
  render() {
    const { Poster, Title, imdbID } = this.props.movie;
    return (
      <>
        <div className="d-flex row p-4 col-12">
          <div className="col-6 d-flex flex-column text-center justify-content-between">
            <h1>{Title}</h1>
            <div className="button_cont text-center">
              <a
                className="btn"
                href={'https://www.imdb.com/title/' + imdbID}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-imdb"></i>Read more on IMDb
              </a>
            </div>
          </div>
          <div className="col-6">
            <img
              src={
                Poster === 'N/A'
                  ? require('../../images/no-poster.jpg')
                  : Poster
              }
              alt={Title}
              title={Title}
              className="rounded shadow mh-25"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Movie;
