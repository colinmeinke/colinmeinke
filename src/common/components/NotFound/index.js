import DocumentTitle from 'react-document-title';
import React from 'react';

import Footer from '../Footer';
import Header from '../Header';

import baseStyles from './base.css';

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
