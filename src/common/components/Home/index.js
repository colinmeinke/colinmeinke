import React, { Component } from 'react';

import Blog from '../Blog';
import Layout from '../Layout';

class Home extends Component {
  render () {
    return (
      <Layout title="Blog">
        <Blog />
      </Layout>
    );
  }
}

export default Home;
