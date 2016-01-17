import React from 'react';
import { Link } from 'universal-redux-router';

import coreStyles from './core.css';

const Footer = () => (
  <footer className={ coreStyles.footer }>
    <p className={ coreStyles.title }>
      I'm taking on new projects in 2016.
    </p>

    <Link
      className={ coreStyles.button }
      url="/work-with-me"
    >
      Discuss working with me remotely
    </Link>
  </footer>
);

export default Footer;
