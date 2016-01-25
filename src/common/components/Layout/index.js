import DocumentTitle from 'react-document-title';
import React, { PropTypes } from 'react';

import Footer from '../Footer';
import Header from '../Header';

const defaultProps = {
  showFooter: true,
};

const propTypes = {
  showFooter: PropTypes.bool,
  title: PropTypes.string,
};

const Layout = ({ children, showFooter, title }) => (
  <DocumentTitle title={ title }>
    <section>
      <Header />
      { children }
      { showFooter ? <Footer /> : null }
    </section>
  </DocumentTitle>
);

Layout.defaultProps = defaultProps;
Layout.propTypes = propTypes;

export default Layout;
