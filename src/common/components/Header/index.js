import React from 'react';
import { Link } from 'universal-redux-router';

import coreStyles from './core.css';

const navItems = [
  { name: 'Blog', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Projects', url: '/projects' },
];

const Header = ({ url }) => (
  <header className={ coreStyles.header }>
    <h1 className={ coreStyles.title }>Colin Meinke</h1>

    <p className={ coreStyles.subTitle }>
      Making websites in far away places.
    </p>

    <p className={ coreStyles.activityLocation }>
      Currently { ' ' }
      <strong className={ coreStyles.activity }>
        learning Spanish
      </strong>
      { ' ' } in { ' ' }
      <strong className={ coreStyles.location }>
        Oaxaca, Mexico
      </strong>.
    </p>

    <ul className={ coreStyles.nav }>
      { navItems.map(( item, i ) => (
        <li
          className={[
            coreStyles.navItem,
            ( url === item.url ? coreStyles.navActive : null ),
          ].join( ' ' )}
          key={ i }
        >
          <Link
            className={ coreStyles.navLink }
            url={ item.url }
          >
            { item.name }
          </Link>
        </li>
      ))}
    </ul>

    <Link
      className={ coreStyles.button }
      url="/work-with-me"
    >
      Work with me
    </Link>
  </header>
);

export default Header;
