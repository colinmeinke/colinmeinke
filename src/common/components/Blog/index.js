import React from 'react';

import { posts } from '../../config/posts';

import { tagMatch } from '../../helpers';

import LoadMorePosts from '../LoadMorePosts';
import PostsFilter from '../PostsFilter';
import PostsList from '../PostsList';

import baseStyles from './base.css';

let morePosts = false;

const postsPerPage = 3;

const getPosts = ( page, tags ) => {
  const postsToDisplay = page * postsPerPage;

  const filteredPosts = posts.filter( post => (
    post.published &&
    ( !tags.length || tagMatch( tags, post.tags ))
  ));

  if ( filteredPosts.length > postsToDisplay ) {
    morePosts = true;
  } else {
    morePosts = false;
  }

  return filteredPosts.slice( 0, postsToDisplay );
};

const Blog = ({ page, tags }) => (
  <section className={ baseStyles.container }>
    <header>
      <p>
        This is a space to share stories of what I'm
        making, where I've been and what my life is like
        working remotely.
      </p>
      <PostsFilter />
      <PostsList posts={ getPosts( page, tags )} />
      { morePosts ? <LoadMorePosts /> : null }
    </header>
  </section>
);

export default Blog;
