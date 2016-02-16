import React, { Component, PropTypes } from 'react';
import { Link } from 'universal-redux-router';

import baseStyles from './base.css';

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
      <article className={ baseStyles.post }>
        <h2 className={ baseStyles.title }>
          { this.props.isPreview ? (
            <Link
              className={ baseStyles.link }
              to={[ 'post', this.props.slug ]}
            >
              { this.props.title }
            </Link>
          ) : this.props.title }
        </h2>

        <p className={ baseStyles.meta }>
          <strong>{ this.props.datePublished }</strong> – { ' ' }
          <strong>{ this.props.locationPublished }</strong>. { ' ' }
          Posted in <strong>{ this.props.tags.join( ', ' )}</strong>.
        </p>

        { this.props.isPreview ? (
          <p className={ baseStyles.description }>
            { this.props.description }
          </p>
        ) : (
          <div
            className={ baseStyles.content }
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
