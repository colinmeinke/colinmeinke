import DocumentTitle from 'react-document-title';
import React from 'react';

import Footer from '../Footer';
import Header from '../Header';

const Blog = () => (
  <DocumentTitle title="Blog">
    <section>
      <Header />
      <h2>Blog</h2>
      <Footer />
    </section>
  </DocumentTitle>
);

export default Blog;
