import React, { Component, PropTypes } from 'react';
import { Link } from 'universal-redux-router';

import baseStyles from './base.css';

const propTypes = {
  activeString: PropTypes.string,
  items: PropTypes.array,
  linkProps: PropTypes.object,
};

class Nav extends Component {
  render () {
    return (
      <nav>
        { this.props.items.map(( item, i ) => (
          <Link
            className={[
              baseStyles.link,
              ( this.props.activeString === item.activeString ? baseStyles.active : null ),
            ].join( ' ' )}
            key={ i }
            to={ item.to }
            { ...this.props.linkProps }
          >
            { item.name }
          </Link>
        ))}
      </nav>
    );
  }
}

Nav.propTypes = propTypes;

export default Nav;
