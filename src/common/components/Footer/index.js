import React from 'react';
import { Link } from 'universal-redux-router';

import baseStyles from './base.css';

const Footer = () => (
  <footer className={ baseStyles.footer }>
    <p className={ baseStyles.title }>
      I'm taking on new projects in 2016.
    </p>

    <Link
      className={ baseStyles.button }
      url="/work-with-me"
    >
      Discuss working with me remotely
    </Link>
  </footer>
);

export default Footer;
