import React, { Component, PropTypes } from 'react';
import { Link } from 'universal-redux-router';

import { content, description, link, meta, post, title } from './styles.css';

const defaultProps = {
  isPreview: false,
};

const propTypes = {
  content: PropTypes.string,
  datePublished: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isPreview: PropTypes.bool.isRequired,
  locationPublished: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

class Post extends Component {
  render () {
    return (
      <article className={ post }>
        <h2 className={ title }>
          { this.props.isPreview ? (
            <Link
              className={ link }
              to={[ 'post', this.props.slug ]}
            >
              { this.props.title }
            </Link>
          ) : this.props.title }
        </h2>

        <p className={ meta }>
          <strong>{ this.props.datePublished }</strong> – { ' ' }
          <strong>{ this.props.locationPublished }</strong>. { ' ' }
          Posted in <strong>{ this.props.tags.join( ', ' )}</strong>.
        </p>

        { this.props.isPreview ? (
          <p
            className={ description }
          >
            { this.props.description }
          </p>
        ) : (
          <div
            className={ content }
            dangerouslySetInnerHTML={{ __html: this.props.content }}
          />
        )}
      </article>
    );
  }
}

Post.defaultProps = defaultProps;
Post.propTypes = propTypes;

export default Post;
