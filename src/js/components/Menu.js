import React from 'react';
import MenuItem from './MenuItem';
import PropTypes from 'prop-types';

class Menu extends React.Component {
  render() {
    return this.props.menuLinks.map((item) => (
      <MenuItem
        key={item.id}
        item={item}
        onMarkComplete={this.props.onMarkComplete}
        onDelete={this.props.onDelete}
      />
    ));
  }
}

// PropTypes
Menu.propTypes = {
  menuLinks: PropTypes.array.isRequired,
  onMarkComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Menu;
