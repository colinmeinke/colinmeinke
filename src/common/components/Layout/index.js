import DocumentTitle from 'react-document-title';
import React, { Component, PropTypes } from 'react';

import Footer from '../Footer';
import Header from '../Header';

const defaultProps = {
  showFooter: true,
};

const propTypes = {
  children: PropTypes.object.isRequired,
  showFooter: PropTypes.bool,
  title: PropTypes.string,
};

class Layout extends Component {
  render () {
    return (
      <DocumentTitle title={ this.props.title }>
        <section>
          <Header />
          { this.props.children }
          { this.props.showFooter ? <Footer /> : null }
        </section>
      </DocumentTitle>
    );
  }
}

Layout.propTypes = propTypes;

Layout.defaultProps = defaultProps;
Layout.propTypes = propTypes;

export default Layout;
