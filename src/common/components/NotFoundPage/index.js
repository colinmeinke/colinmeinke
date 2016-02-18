import React, { Component } from 'react';

import Layout from '../Layout';

import { container, title } from './styles.css';

class NotFoundPage extends Component {
  render () {
    return (
      <Layout title="Page not found">
        <section className={ container }>
          <h2 className={ title }>
            Page not found
          </h2>
        </section>
      </Layout>
    );
  }
}

export default NotFoundPage;
