import React from 'react';

const Post = ({ tags, title }) => (
  <article>
    <h2>{ title }</h2>
    <p>
      posted in { ' ' }
      <strong>
        { tags.join( ', ' )}
      </strong>
    </p>
  </article>
);

export default Post;
