import React, { Component, PropTypes } from 'react';

import { postsPerPage } from '../../config/posts';

import LoadMorePosts from '../LoadMorePosts';
import PostsFilter from '../PostsFilter';
import PostsList from '../PostsList';

import baseStyles from './base.css';

const propTypes = {
  posts: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  morePosts: PropTypes.bool.isRequired,
};

class Blog extends Component {
  render () {
    return (
      <section className={ baseStyles.container }>
        <header>
          <p>
            This is a space to share stories of what I'm
            making, where I've been and what my life is like
            working remotely.
          </p>
          <PostsFilter />
          <PostsList posts={ this.props.posts.slice( 0, this.props.page * postsPerPage ) } />
          { this.props.morePosts ? <LoadMorePosts /> : null }
        </header>
      </section>
    );
  }
}

Blog.propTypes = propTypes;

export default Blog;
