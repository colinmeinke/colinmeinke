import React from 'react';

import baseStyles from './base.css';

import PostsFilter from '../PostsFilter';

const Blog = () => (
  <section className={ baseStyles.container }>
    <header>
      <p>
        This is a space to share stories of what I'm
        making, where I've been and what my life is like
        working remotely.
      </p>
      <PostsFilter />
    </header>
  </section>
);

export default Blog;
