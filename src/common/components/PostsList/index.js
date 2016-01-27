import React from 'react';

import Post from '../Post';

const PostsList = ({ posts }) => (
  <section>
    {
      posts.length ?
      posts.map(( post, i ) => (
        <Post key={ i } { ...post } />
      )) :
      <p>
        No posts here yet : /
      </p>
    }
  </section>
);

export default PostsList;
