import React, { Component } from 'react';

import Layout from '../Layout';

import { container, title } from './styles.css';

class NotFoundPage extends Component {
  render () {
    return (
      <Layout title="Page not found">
        <section className={ container }>
          <h1 className={ title }>
            Page not found
          </h1>
        </section>
      </Layout>
    );
  }
}

export default NotFoundPage;
