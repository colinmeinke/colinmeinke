import React from 'react';

import { posts } from '../../config/posts';

import { tagMatch } from '../../helpers';

import LoadMorePosts from '../LoadMorePosts';
import PostsFilter from '../PostsFilter';
import PostsList from '../PostsList';

import baseStyles from './base.css';

const getPosts = tags => posts.filter( post => (
  post.published &&
  ( !tags.length || tagMatch( tags, post.tags ))
));

const Blog = ({ tags }) => (
  <section className={ baseStyles.container }>
    <header>
      <p>
        This is a space to share stories of what I'm
        making, where I've been and what my life is like
        working remotely.
      </p>
      <PostsFilter />
      <PostsList posts={ getPosts( tags )} />
      <LoadMorePosts />
    </header>
  </section>
);

export default Blog;
