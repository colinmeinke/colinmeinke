import React from 'react';

import Layout from '../Layout';

import baseStyles from './base.css';

const NotFound = () => (
  <Layout title="Page not found">
    <section className={ baseStyles.containter }>
      <h2 className={ baseStyles.title }>
        Page not found
      </h2>
    </section>
  </Layout>
);

export default NotFound;
