import DocumentMeta from 'react-document-meta';
import React, { Component, PropTypes } from 'react';

import { getRootUrl } from '../../helpers/url';

import CallToAction from '../CallToAction';
import Footer from '../Footer';
import Header from '../Header';

const defaultProps = {
  meta: {},
  showCallToAction: true,
};

const propTypes = {
  description: PropTypes.string,
  children: PropTypes.object.isRequired,
  meta: PropTypes.object,
  showCallToAction: PropTypes.bool,
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
};

class Layout extends Component {
  render () {
    const description = this.props.description || 'Making websites in far away places';
    const rootUrl = getRootUrl();
    const siteName = 'Colin Meinke';
    const title = `${ this.props.title }${ this.props.title ? ' – ' : null }${ siteName }`;
    const url = rootUrl + this.props.url;

    const meta = {
      title,
      canonical: url,
      meta: {
        charSet: 'utf-8',
        name: {
          description,
          referrer: 'origin',
          viewport: 'width=device-width, initial-scale=1',
        },
        property: {
          'og:description': description,
          'og:site_name': siteName,
          'og:title': title,
          'og:type': 'website',
          'og:url': url,
          'twitter:card': 'summary_large_image',
          'twitter:description': description,
          'twitter:title': title,
          'twitter:url': url,
          ...this.props.meta,
        },
      },
    };

    return (
      <div>
        <DocumentMeta { ...meta }>
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
        </DocumentMeta>
      </div>
    );
  }
}

Layout.propTypes = propTypes;

Layout.defaultProps = defaultProps;
Layout.propTypes = propTypes;

export default Layout;
