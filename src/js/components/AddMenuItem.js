import React, { Component } from 'react';

export class AddMenuItem extends Component {
  state = {
    title: '',
  };

  onChange = (e) => {
    this.setState({ title: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddMenuItem(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    return (
      <form className="d-flex my-3" onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add menu link"
          style={{ flex: '10', padding: '10px' }}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          style={{ flex: '1', cursor: 'pointer', marginLeft: '10px' }}
        />
      </form>
    );
  }
}

export default AddMenuItem;
