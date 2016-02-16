import React, { Component, PropTypes } from 'react';

import { postsPerPage } from '../../config/posts';

import MorePosts from '../MorePosts';
import PostListFilter from '../PostListFilter';
import PostList from '../PostList';

import baseStyles from './base.css';

const propTypes = {
  page: PropTypes.number.isRequired,
  postList: PropTypes.array.isRequired,
  morePosts: PropTypes.bool.isRequired,
};

class PostDiscovery extends Component {
  render () {
    return (
      <section className={ baseStyles.container }>
        <header>
          <p>
            This is a space to share stories of what I'm
            making, where I've been and what my life is like
            working remotely.
          </p>
          <PostListFilter />
        </header>
        <PostList posts={ this.props.postList.slice( 0, this.props.page * postsPerPage ) } />
        { this.props.morePosts ? <MorePosts /> : null }
      </section>
    );
  }
}

PostDiscovery.propTypes = propTypes;

export default PostDiscovery;
