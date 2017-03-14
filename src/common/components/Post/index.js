import React, { Component, PropTypes } from 'react';
import { Link } from 'universal-redux-router';

import {
  content,
  description,
  link,
  meta,
  metaItem,
  title
} from './styles.css';

const defaultProps = {
  isPreview: false
};

const propTypes = {
  content: PropTypes.string,
  datePublished: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isPreview: PropTypes.bool.isRequired,
  locationPublished: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

class Post extends Component {
  render() {
    return (
      <article
        itemProp="blogPost"
        itemScope
        itemType="http://schema.org/BlogPosting"
        role="article"
      >
        <h1 className={title} itemProp="name">
          {this.props.isPreview
            ? <Link
                className={link}
                itemProp="url"
                to={['post', this.props.slug]}
              >
                {this.props.title}
              </Link>
            : this.props.title}
        </h1>

        <p className={meta}>
          <date className={metaItem} itemProp="datePublished">
            {this.props.datePublished}
          </date> – {' '}
          <strong className={metaItem}>
            {this.props.locationPublished}
          </strong>. {' '}
          Posted in {' '}
          <strong className={metaItem}>
            {this.props.tags.join(', ')}
          </strong>.
        </p>

        {this.props.isPreview
          ? <p className={description}>
              {this.props.description}
            </p>
          : <div
              className={content}
              dangerouslySetInnerHTML={{ __html: this.props.content }}
              itemProp="articleBody"
            />}
      </article>
    );
  }
}

Post.defaultProps = defaultProps;
Post.propTypes = propTypes;

export default Post;
