import React from 'react';
import PropTypes from 'prop-types';

class MenuItem extends React.Component {
  // Styles each menuitem
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px solid black',
      color: this.props.item.isChecked ? 'salmon' : 'black',
    };
  };
  render() {
    const { id, title, isChecked } = this.props.item;

    return (
      <div style={this.getStyle()}>
        <h3>
          <input
            type="checkbox"
            className="mr-3"
            onChange={() => this.props.onMarkComplete(id)}
            checked={isChecked}
          />
          {title}
          <button
            className="btn btn-danger float-right"
            onClick={() => this.props.onDelete(id)}
          >
            x
          </button>
        </h3>
      </div>
    );
  }
}

// PropTypes
MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MenuItem;
