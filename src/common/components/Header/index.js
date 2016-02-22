import React, { Component, PropTypes } from 'react';
import { Link } from 'universal-redux-router';

import { navItems } from '../../config';

import {
  active,
  activity,
  activityLocation,
  button,
  container,
  header,
  item,
  location,
  logo,
  menu,
  nav,
  subTitle,
} from './styles.css';

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
      <header className={ header }>
        <div className={ container }>
          <svg
            className={ logo }
            height="40"
            viewBox="0 0 40 40"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Colin Meinke</title>
            <path
              d="M22.4 4C17 4 12 0 11.6 0 11.2 0 9 3.2 9 3.4c0 .4 2.3 2 5 3 0
                 0-8.3 3.2-11.3 8.6C1 18-.3 21.4 0 25c.6 2.8 2.8 15 20 15 8.4 0
                 16.5-5 20.2-8-1.5-1.3-2.8-2.7-4-4.2-3.7 2.7-10.5 7.3-16.7
                 7.3C8 35 6 29 6 25c0-2.2 1-6 2.2-8 1.3-1.6 4.6-8 17.2-8 1.5 0
                 3 0 4.2-.2 0-1.7.2-3.4.6-5C27 4 25 4 22.4 4z"
              fill-rule="evenodd"
            />
          </svg>

          <div className={ menu }>
            <Nav
              activeClassName={ active }
              activeString={ this.props.url.split( '?' )[ 0 ]}
              itemClassName={ item }
              items={ items }
              navClassName={ nav }
            />
            <Link
              className={ button }
              to="/work-with-me"
            >
              Work with me
            </Link>
          </div>

          <h2 className={ subTitle }>
            Making websites in far away places.
          </h2>

          <p className={ activityLocation }>
            Currently { ' ' }
            <strong className={ activity }>
              watching #reactconf
            </strong>
            { ' ' } from { ' ' }
            <strong className={ location }>
              Querétaro, Mexico
            </strong>.
          </p>
        </div>
      </header>
    );
  }
}

Header.propTypes = propTypes;

export default Header;
