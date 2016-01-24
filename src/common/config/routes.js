import React from 'react';

import About from '../components/About';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import Projects from '../components/Projects';
import WorkWithMe from '../components/WorkWithMe';

const routes = url => {
  const path = url.split( '?' )[ 0 ];

  switch ( path ) {
    case '/about':
      return <About />;
    case '/':
      return <Home />;
    case '/projects':
      return <Projects />;
    case '/work-with-me':
      return <WorkWithMe />;
    default:
      return <NotFound />;
  }
};

export default routes;
