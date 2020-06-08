import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <>
        <div id="header" className="text-center mt-4">
          <div className="row justify-content-center">
            <span className="col-12">
              <img
                src={require('../../images/icons/header-logo.png')}
                alt=""
                className="logo"
              />
            </span>
            <h1 className="align-self-center mt-4">OMDb API Call</h1>
          </div>
          <form
            className="d-flex mt-3 col-12 col-lg-10 justify-content-center mx-auto p-0"
            onSubmit={(e) => {
              e.preventDefault();
              this.props.onSearchRequest();
            }}
          >
            <div className="col-12 row justify-content-center p-0">
              <input
                type="text"
                name="title"
                placeholder="Search for a movie, series or game"
                className="col-12 col-md-7 form-control mr-md-2 "
                autoFocus
                onChange={(e) => this.props.onUpdateQuery(e.target.value)}
              />
              <input
                type="submit"
                value="Search"
                className="btn mt-2 mt-md-0 col-12 col-md-4"
              />
            </div>
          </form>
          <p
            className={
              this.props.displayError ? 'd-block text-danger mt-4' : 'd-none'
            }
          >
            {this.props.errorMessage}
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
};

export default Header;
