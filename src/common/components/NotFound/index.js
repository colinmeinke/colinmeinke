import DocumentTitle from 'react-document-title';
import React from 'react';

import baseStyles from './base.css';

import Footer from '../Footer';
import Header from '../Header';

const NotFound = () => (
  <DocumentTitle title="Page not found">
    <section>
      <Header />

      <section className={ baseStyles.containter }>
        <h2>Page not found</h2>
      </section>

      <Footer />
    </section>
  </DocumentTitle>
);

export default NotFound;
