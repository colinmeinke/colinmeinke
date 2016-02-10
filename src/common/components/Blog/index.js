import React from 'react';

import { postsPerPage } from '../../config/posts';

import LoadMorePosts from '../LoadMorePosts';
import PostsFilter from '../PostsFilter';
import PostsList from '../PostsList';

import baseStyles from './base.css';

const Blog = ({ morePosts, page, posts }) => (
  <section className={ baseStyles.container }>
    <header>
      <p>
        This is a space to share stories of what I'm
        making, where I've been and what my life is like
        working remotely.
      </p>
      <PostsFilter />
      <PostsList posts={ posts.slice( 0, page * postsPerPage ) } />
      { morePosts ? <LoadMorePosts /> : null }
    </header>
  </section>
);

export default Blog;
