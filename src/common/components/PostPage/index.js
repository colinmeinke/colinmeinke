import React, { Component, PropTypes } from 'react';
import { Link } from 'universal-redux-router';

import Layout from '../Layout';
import Post from '../Post';

import { container, link, title } from './styles.css';

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
        <div className={ container }>
          { this.props.postLoading ?
            <h2 className={ title }>...loading post</h2> :
            <Post { ...this.props.post } />
          }
          <Link
            className={ link }
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
