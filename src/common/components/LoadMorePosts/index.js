import React, { Component, PropTypes } from 'react';
import { Link } from 'universal-redux-router';

import baseStyles from './base.css';

const propTypes = {
  page: PropTypes.number.isRequired,
  tags: PropTypes.array.isRequired,
};

class LoadMorePosts extends Component {
  render () {
    return (
      <Link
        className={ baseStyles.link }
        shouldScrollToTop={ false }
        to={[ '/', { page: this.props.page + 1, tags: this.props.tags }]}
      >
        Load more posts
      </Link>
    );
  }
}

LoadMorePosts.propTypes = propTypes;

export default LoadMorePosts;
