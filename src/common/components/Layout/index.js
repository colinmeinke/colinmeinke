import DocumentTitle from 'react-document-title';
import React, { Component, PropTypes } from 'react';

import CallToAction from '../CallToAction';
import Footer from '../Footer';
import Header from '../Header';

const defaultProps = {
  showCallToAction: true,
};

const propTypes = {
  children: PropTypes.object.isRequired,
  showCallToAction: PropTypes.bool,
  title: PropTypes.string,
};

class Layout extends Component {
  render () {
    return (
      <DocumentTitle title={ this.props.title }>
        <section>
          <Header />
          { this.props.children }
          { this.props.showCallToAction ?
            <CallToAction
              linkText="Discuss working with me remotely"
              linkTo="/work-with-me"
              title="I'm taking on new projects in 2016."
            /> :
            null
          }
          <Footer />
        </section>
      </DocumentTitle>
    );
  }
}

Layout.propTypes = propTypes;

Layout.defaultProps = defaultProps;
Layout.propTypes = propTypes;

export default Layout;
