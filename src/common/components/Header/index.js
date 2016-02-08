import React from 'react';
import { Link } from 'universal-redux-router';

import { navItems } from '../../config';

import baseStyles from './base.css';

import Nav from '../Nav';

const items = navItems.map(({ name, url }) => ({
  activeString: url,
  name,
  to: url,
}));

const Header = ({ url }) => (
  <header className={ baseStyles.header }>
    <h1 className={ baseStyles.title }>Colin Meinke</h1>

    <p className={ baseStyles.subTitle }>
      Making websites in far away places.
    </p>

    <p className={ baseStyles.activityLocation }>
      Currently { ' ' }
      <strong className={ baseStyles.activity }>
        codin'
      </strong>
      { ' ' } in { ' ' }
      <strong className={ baseStyles.location }>
        San Miguel de Allende, Mexico
      </strong>.
    </p>

    <Nav
      activeString={ url.split( '?' )[ 0 ]}
      items={ items }
    />

    { url === '/work-with-me' ? null : (
      <Link
        className={ baseStyles.button }
        to="/work-with-me"
      >
        Work with me
      </Link>
    )}
  </header>
);

export default Header;
