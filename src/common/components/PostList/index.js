import React, { Component, PropTypes } from 'react';

import Post from '../Post';

import { container, title } from './styles.css';

const propTypes = {
  posts: PropTypes.array.isRequired,
};

class PostList extends Component {
  render () {
    return (
      <main
        className={ container }
        role="main"
      >
        {
          this.props.posts.length ?
          this.props.posts.map(( post, i ) => (
            <Post isPreview key={ i } { ...post } />
          )) :
          <h1 className={ title }>
            No posts here yet : /
          </h1>
        }
      </main>
    );
  }
}

PostList.propTypes = propTypes;

export default PostList;
