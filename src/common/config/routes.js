import React from 'react';

import {
  getPosts,
  postsLoading,
  postsLoaded,
  updateMorePosts,
  updatePage,
  updatePost,
  updateTags,
} from '../actions';

import About from '../components/About';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import Projects from '../components/Projects';
import WorkWithMe from '../components/WorkWithMe';

const createRoutes = () => ([
  [ '/', {
    page: updatePage,
    tags: updateTags,
    after: [
      postsLoading,
      getPosts,
      updateMorePosts,
      postsLoaded,
    ],
  }, <Home /> ],

  [ '/about', <About /> ],
  [ '/projects', <Projects /> ],
  [ '/work-with-me', <WorkWithMe /> ],
  [ '*', <NotFound /> ],
]);

let routes = createRoutes();

if ( module.hot ) {
  module.hot.accept();
  routes = createRoutes();
}

export default routes;
