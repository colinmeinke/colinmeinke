import React, { Component, PropTypes } from 'react';
import { Link } from 'universal-redux-router';

import { navItems } from '../../config';

import baseStyles from './base.css';

import Nav from '../Nav';

const items = navItems.map(({ name, url }) => ({
  activeString: url,
  name,
  to: url,
}));

const propTypes = {
  url: PropTypes.string.isRequired,
};

class Header extends Component {
  render () {
    return (
      <header className={ baseStyles.header }>
        <h1 className={ baseStyles.title }>Colin Meinke</h1>

        <p className={ baseStyles.subTitle }>
          Making websites in far away places.
        </p>

        <p className={ baseStyles.activityLocation }>
          Currently { ' ' }
          <strong className={ baseStyles.activity }>
            market dwelling
          </strong>
          { ' ' } in { ' ' }
          <strong className={ baseStyles.location }>
            Querétaro, Mexico
          </strong>.
        </p>

        <Nav
          activeString={ this.props.url.split( '?' )[ 0 ]}
          items={ items }
        />

        { this.props.url === '/work-with-me' ? null : (
          <Link
            className={ baseStyles.button }
            to="/work-with-me"
          >
            Work with me
          </Link>
        )}
      </header>
    );
  }
}

Header.propTypes = propTypes;

export default Header;
