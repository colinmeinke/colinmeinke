import React, { PropTypes } from 'react';
import { Link } from 'universal-redux-router';

import baseStyles from './base.css';

const propTypes = {
  activeString: PropTypes.string,
  items: PropTypes.array,
  linkProps: PropTypes.object,
};

const Nav = ({ activeString, items, linkProps }) => (
  <nav>
    { items.map(( item, i ) => (
      <Link
        className={[
          baseStyles.link,
          ( activeString === item.activeString ? baseStyles.active : null ),
        ].join( ' ' )}
        key={ i }
        url={ item.url }
        { ...linkProps }
      >
        { item.name }
      </Link>
    ))}
  </nav>
);

Nav.propTypes = propTypes;

export default Nav;
