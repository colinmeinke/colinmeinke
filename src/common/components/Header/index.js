import React from 'react';
import { Link } from 'universal-redux-router';

const Header = () => (
  <header>
    <h1>Colin Meinke</h1>

    <p>Making websites in far away places.</p>

    <p>Currently learning Spanish in Oaxaca, Mexico.</p>

    <ul>
      <li><Link url="/">Blog</Link></li>
      <li><Link url="/about">About</Link></li>
      <li><Link url="/projects">Projects</Link></li>
    </ul>

    <Link url="/work-with-me">Work with me</Link>
  </header>
);

export default Header;
