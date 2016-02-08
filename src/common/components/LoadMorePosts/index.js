import React from 'react';
import { Link } from 'universal-redux-router';

import baseStyles from './base.css';

const LoadMorePosts = ({ page, tags }) => (
  <Link
    className={ baseStyles.link }
    shouldScrollToTop={ false }
    to={[ '/', { page: page + 1, tags }]}
  >
    Load more post
  </Link>
);

export default LoadMorePosts;
