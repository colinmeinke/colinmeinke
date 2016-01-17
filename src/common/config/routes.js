import React from 'react';

import About from '../components/About';
import Blog from '../components/Blog';
import Projects from '../components/Projects';
import WorkWithMe from '../components/WorkWithMe';
import NotFound from '../components/NotFound';

const routes = url => {
  const path = url.split( '?' )[ 0 ];

  switch ( path ) {
    case '/about':
      return <About />;
    case '/':
      return <Blog />;
    case '/projects':
      return <Projects />;
    case '/work-with-me':
      return <WorkWithMe />;
    default:
      return <NotFound />;
  }
};

export default routes;
