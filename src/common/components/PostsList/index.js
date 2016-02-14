import React, { Component, PropTypes } from 'react';

import Post from '../Post';

import baseStyles from './base.css';

const propTypes = {
  posts: PropTypes.array.isRequired,
};

class PostsList extends Component {
  render () {
    return (
      <section>
        {
          this.props.posts.length ?
          this.props.posts.map(( post, i ) => (
            <Post isPreview key={ i } { ...post } />
          )) :
          <h2 className={ baseStyles.title }>
            No posts here yet : /
          </h2>
        }
      </section>
    );
  }
}

PostsList.propTypes = propTypes;

export default PostsList;
