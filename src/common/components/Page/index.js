import React, { PropTypes } from 'react';

import baseStyles from './base.css';

const defaultProps = {
  language: 'en',
  scripts: [],
  styles: [],
};

const propTypes = {
  app: PropTypes.object,
  description: PropTypes.string,
  initialState: PropTypes.object,
  language: PropTypes.string,
  scripts: PropTypes.array,
  styles: PropTypes.array,
  title: PropTypes.string,
};

const Page = ({ app, description, initialState, language, scripts, styles, title }) => (
  <html
    className={ baseStyles.html }
    lang={ language }
  >
    <head>
      <meta charSet="utf-8" />
      <meta
        content="ie=edge"
        httpEquiv="x-ua-compatible"
      />
      <title>{ title }</title>
      <meta
        content={ description }
        name="description"
      />
      <meta
        content="width=device-width, initial-scale=1"
        name="viewport"
      />
      { styles.map(( style, i ) => <link href={ style } key={ i } rel="stylesheet" /> )}
    </head>
    <body
      className={ baseStyles.body }
    >
      <section
        className="app"
        dangerouslySetInnerHTML={{ __html: app }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__INITIAL_STATE__ = ${ JSON.stringify( initialState )};`,
        }}
      />
      { scripts.map(( script, i ) => <script key={ i } src={ script } /> )}
    </body>
  </html>
);

Page.defaultProps = defaultProps;
Page.propTypes = propTypes;

export default Page;
