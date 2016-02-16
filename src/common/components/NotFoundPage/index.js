import React, { Component } from 'react';

import Layout from '../Layout';

import baseStyles from './base.css';

class NotFoundPage extends Component {
  render () {
    return (
      <Layout title="Page not found">
        <section className={ baseStyles.containter }>
          <h2 className={ baseStyles.title }>
            Page not found
          </h2>
        </section>
      </Layout>
    );
  }
}

export default NotFoundPage;
