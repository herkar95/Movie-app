import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <>
        <div id="header" className="text-center mt-4">
          <h1>(ICON) - search the OMDb database</h1>
          <form className="d-flex mt-3 col-8 justify-content-center mx-auto">
            <input
              type="text"
              name="title"
              placeholder="Search for a movie, series or game"
              className="col-8 mr-2"
            />
            <input type="submit" value="Search" className="col-2 btn" />
          </form>
        </div>
      </>
    );
  }
}

export default Header;
