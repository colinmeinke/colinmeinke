import React from 'react';
import { Link } from 'universal-redux-router';

import baseStyles from './base.css';

const navItems = [
  { name: 'Blog', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Projects', url: '/projects' },
];

const Header = ({ url }) => (
  <header className={ baseStyles.header }>
    <h1 className={ baseStyles.title }>Colin Meinke</h1>

    <p className={ baseStyles.subTitle }>
      Making websites in far away places.
    </p>

    <p className={ baseStyles.activityLocation }>
      Currently { ' ' }
      <strong className={ baseStyles.activity }>
        learning Spanish
      </strong>
      { ' ' } in { ' ' }
      <strong className={ baseStyles.location }>
        Oaxaca, Mexico
      </strong>.
    </p>

    <ul className={ baseStyles.nav }>
      { navItems.map(( item, i ) => (
        <li
          className={[
            baseStyles.navItem,
            ( url === item.url ? baseStyles.navActive : null ),
          ].join( ' ' )}
          key={ i }
        >
          <Link
            className={ baseStyles.navLink }
            url={ item.url }
          >
            { item.name }
          </Link>
        </li>
      ))}
    </ul>

    { url === '/work-with-me' ? null : (
      <Link
        className={ baseStyles.button }
        url="/work-with-me"
      >
        Work with me
      </Link>
    )}
  </header>
);

export default Header;
