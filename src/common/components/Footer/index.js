import React, { Component } from 'react';
import { Link } from 'universal-redux-router';

import baseStyles from './base.css';

class Footer extends Component {
  render () {
    return (
      <footer className={ baseStyles.footer }>
        <p className={ baseStyles.title }>
          I'm taking on new projects in 2016.
        </p>

        <Link
          className={ baseStyles.button }
          to="/work-with-me"
        >
          Discuss working with me remotely
        </Link>
      </footer>
    );
  }
}

export default Footer;
