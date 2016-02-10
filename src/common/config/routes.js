import React from 'react';

import { getPosts, updateMorePosts, updatePage, updateTags } from '../actions';

import About from '../components/About';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import Projects from '../components/Projects';
import WorkWithMe from '../components/WorkWithMe';

const routes = [
  [ '/about', <About /> ],

  [ '/', {
    page: updatePage,
    tags: updateTags,
    after: [ getPosts, updateMorePosts ],
  }, <Home /> ],

  [ '/projects', <Projects /> ],
  [ '/work-with-me', <WorkWithMe /> ],
  [ '*', <NotFound /> ],
];

export default routes;
