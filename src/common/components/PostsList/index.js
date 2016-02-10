import React from 'react';

import Post from '../Post';

import baseStyles from './base.css';

const PostsList = ({ posts }) => (
  <section>
    {
      posts.length ?
      posts.map(( post, i ) => (
        <Post key={ i } { ...post } />
      )) :
      <h2 className={ baseStyles.title }>
        No posts here yet : /
      </h2>
    }
  </section>
);

export default PostsList;
