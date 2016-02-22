import React, { Component } from 'react';

import Layout from '../Layout';

import { container, title } from './styles.css';

class NotFoundPage extends Component {
  render () {
    return (
      <Layout
        description="Page not found page"
        title="Page not found"
      >
        <main
          className={ container }
          role="main"
        >
          <h1 className={ title }>
            Page not found
          </h1>
        </main>
      </Layout>
    );
  }
}

export default NotFoundPage;
