import React, { Component, PropTypes } from 'react';
import { Link } from 'universal-redux-router';

import { link } from './styles.css';

const propTypes = {
  page: PropTypes.number.isRequired,
  tags: PropTypes.array.isRequired
};

class MorePosts extends Component {
  render() {
    return (
      <Link
        className={link}
        shouldScrollToTop={false}
        to={['/', { page: this.props.page + 1, tags: this.props.tags }]}
      >
        Load more posts
      </Link>
    );
  }
}

MorePosts.propTypes = propTypes;

export default MorePosts;
