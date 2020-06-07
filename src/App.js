import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';
import Movies from './js/components/Movies';
import Header from './js/containers/Header';

class App extends React.Component {
  state = {
    movies: [],
  };

  // API request to OMDb
  componentDidMount() {
    Axios.get('http://www.omdbapi.com/?apikey=83d7041f&s=Dark+Souls').then(
      (response) => {
        const movies = response.data.Search.map((movie) => {
          movie = { ...movie, isInteresting: true, id: uuidv4() };
          return movie;
        });
        this.setState({ movies });
      }
    );
  }

  handleMarkComplete = (id) => {
    this.setState({
      menuLinks: this.state.menuLinks.map((item) => {
        if (item.id === id) {
          item.isChecked = !item.isChecked;
        }
        return item;
      }),
    });
  };

  handleDelete = (id) => {
    const menuLinks = this.state.menuLinks.filter((c) => c.id !== id);
    this.setState({ menuLinks });
  };

  handleAddMenuItem = (title) => {
    const newMenuItem = {
      id: uuidv4(),
      title,
      url: '/' + title,
      isChecked: false,
    };
    this.setState({ menuLinks: [...this.state.menuLinks, newMenuItem] });
  };

  handleDeleteAlbums = () => {
    const albums = this.state.albums.filter((item) => item.id % 2 === 0);
    this.setState({ albums });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <Movies movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
