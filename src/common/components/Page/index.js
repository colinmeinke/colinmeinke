import React, { Component, PropTypes } from 'react';

import { body, html } from './styles.css';

const defaultProps = {
  language: 'en',
  meta: [],
  scripts: [],
  styles: [],
};

const propTypes = {
  app: PropTypes.string,
  language: PropTypes.string,
  meta: PropTypes.array,
  scripts: PropTypes.array,
  styles: PropTypes.array,
};

class Page extends Component {
  render () {
    return (
      <html
        className={ html }
        lang={ this.props.language }
      >
        <head>
          <link href="/images/icons/32x32.png" rel="icon" sizes="32x32" type="image/png" />
          <link href="/images/icons/194x194.png" rel="icon" sizes="194x194" type="image/png" />
          <link href="/images/icons/96x96.png" rel="icon" sizes="96x96" type="image/png" />
          <link href="/images/icons/16x16.png" rel="icon" sizes="16x16" type="image/png" />
          { this.props.meta }
          { this.props.styles.map(( style, i ) => (
            <link href={ style } key={ i } rel="stylesheet" />
          ))}
        </head>
        <body className={ body }>
          <section
            className="app"
            dangerouslySetInnerHTML={{ __html: this.props.app }}
          />
          { this.props.scripts.map(( script, i ) => (
            <script key={ i } src={ script } />
          ))}
        </body>
      </html>
    );
  }
}

Page.defaultProps = defaultProps;
Page.propTypes = propTypes;

export default Page;
