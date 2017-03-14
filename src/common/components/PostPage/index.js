import React, { Component, PropTypes } from 'react';
import { Link } from 'universal-redux-router';

import Layout from '../Layout';
import Post from '../Post';

import { container, link, title } from './styles.css';

const propTypes = {
  page: PropTypes.number.isRequired,
  post: PropTypes.object.isRequired,
  postLoading: PropTypes.bool.isRequired,
  tags: PropTypes.array.isRequired
};

class PostPage extends Component {
  render() {
    const layoutProps = {};

    if (!this.props.postLoading) {
      layoutProps.description = this.props.post.description;
      layoutProps.title = this.props.post.title;
      layoutProps.meta = {
        'og:type': 'article',
        'article:published_time': this.props.post.datePublished,
        'article:tag': this.props.post.tags.join(' ')
      };
    }

    return (
      <Layout {...layoutProps}>
        <main
          className={container}
          itemScope
          itemType="http://schema.org/Blog"
          role="main"
        >
          {this.props.postLoading
            ? <h1 className={title}>...loading post</h1>
            : <Post {...this.props.post} />}
          <Link
            className={link}
            shouldScrollToTop={false}
            to={['/', { page: this.props.page, tags: this.props.tags }]}
          >
            Back to post list
          </Link>
        </main>

      </Layout>
    );
  }
}

PostPage.propTypes = propTypes;

export default PostPage;
