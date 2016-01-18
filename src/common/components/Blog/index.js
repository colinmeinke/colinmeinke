import DocumentTitle from 'react-document-title';
import React from 'react';

import Footer from '../Footer';
import Header from '../Header';

import baseStyles from './base.css';

const Blog = () => (
  <DocumentTitle title="Blog">
    <section>
      <Header />

      <section className={ baseStyles.containter }>
        <h2 className={ baseStyles.title }>Blog</h2>
        <p>... soon.</p>
      </section>

      <Footer />
    </section>
  </DocumentTitle>
);

export default Blog;
