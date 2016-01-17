import DocumentTitle from 'react-document-title';
import React from 'react';

import Footer from '../Footer';
import Header from '../Header';

const NotFound = () => (
  <DocumentTitle title="Page not found">
    <section>
      <Header />
      <h2>Page not found</h2>
      <Footer />
    </section>
  </DocumentTitle>
);

export default NotFound;
