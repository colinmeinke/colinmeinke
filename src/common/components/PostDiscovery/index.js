import React, { Component, PropTypes } from 'react';

import { postsPerPage } from '../../config/posts';

import MorePosts from '../MorePosts';
import PostListFilter from '../PostListFilter';
import PostList from '../PostList';

import { container, header, headerContainer, title } from './styles.css';

const propTypes = {
  page: PropTypes.number.isRequired,
  postList: PropTypes.array.isRequired,
  morePosts: PropTypes.bool.isRequired,
};

class PostDiscovery extends Component {
  render () {
    return (
      <section
        className={ container }
        itemScope
        itemType="http://schema.org/Blog"
      >
        <header className={ header }>
          <div className={ headerContainer }>
            <p className={ title }>
              This is a space to share stories of what I'm
              making, where I've been and what my life is like
              working remotely.
            </p>
            <PostListFilter />
          </div>
        </header>
        <PostList posts={ this.props.postList.slice( 0, this.props.page * postsPerPage ) } />
        { this.props.morePosts ? <MorePosts /> : null }
      </section>
    );
  }
}

PostDiscovery.propTypes = propTypes;

export default PostDiscovery;
