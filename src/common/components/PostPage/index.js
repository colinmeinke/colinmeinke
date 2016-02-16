import React, { Component, PropTypes } from 'react';
import { Link } from 'universal-redux-router';

import Layout from '../Layout';
import Post from '../Post';

import baseStyles from './base.css';

const propTypes = {
  page: PropTypes.number.isRequired,
  post: PropTypes.object.isRequired,
  postLoading: PropTypes.bool.isRequired,
  tags: PropTypes.array.isRequired,
};

class PostPage extends Component {
  render () {
    return (
      <Layout title={ this.props.post.title || '...loading post' }>
        <div className={ baseStyles.container }>
          { this.props.postLoading ? '...loading post' : (
            <Post { ...this.props.post } />
          )}
          <Link
            className={ baseStyles.link }
            shouldScrollToTop={ false }
            to={[ '/', { page: this.props.page, tags: this.props.tags }]}
          >
            Back to post list
          </Link>
        </div>

      </Layout>
    );
  }
}

PostPage.propTypes = propTypes;

export default PostPage;
