import React from 'react';
import { Link } from 'universal-redux-router';

import baseStyles from './base.css';

const LoadMorePosts = ({ page, tags }) => (
  <Link
    className={ baseStyles.link }
    to={[ '/', { page: page + 1, tags }]}
    shouldScrollToTop={ false }
  >
    Load more post
  </Link>
);

export default LoadMorePosts;
