import DocumentTitle from 'react-document-title';
import React from 'react';

import Blog from '../Blog';
import Footer from '../Footer';
import Header from '../Header';

const Home = () => (
  <DocumentTitle title="Blog">
    <section>
      <Header />
      <Blog />
      <Footer />
    </section>
  </DocumentTitle>
);

export default Home;
