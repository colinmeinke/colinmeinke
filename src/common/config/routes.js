import React from 'react';

import {
  getPost,
  getPostList,
  postListLoading,
  postListLoaded,
  postLoading,
  postLoaded,
  updateMorePosts,
  updatePage,
  updatePostSlug,
  updateTags,
} from '../actions';

import About from '../components/AboutPage';
import Home from '../components/HomePage';
import NotFound from '../components/NotFoundPage';
import Post from '../components/PostPage';
import Projects from '../components/ProjectsPage';
import WorkWithMe from '../components/WorkWithMePage';

const createRoutes = () => ([
  [ '/', {
    page: updatePage,
    tags: updateTags,
    after: [
      postListLoading,
      getPostList,
      postListLoaded,
      updateMorePosts,
    ],
  }, <Home /> ],

  [ 'post/:postSlug', {
    postSlug: updatePostSlug,
    after: [
      postLoading,
      getPost,
      postLoaded,
    ],
  }, <Post /> ],

  [ '/about', <About /> ],
  [ '/projects', <Projects /> ],
  [ '/work-with-me', <WorkWithMe /> ],
  [ '*', <NotFound /> ],
]);

let routes = createRoutes();

if ( __DEVELOPMENT__ && module.hot ) {
  module.hot.accept();
  routes = createRoutes();
}

export default routes;
