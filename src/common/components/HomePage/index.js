import React, { Component } from 'react';

import Layout from '../Layout';
import PostDiscovery from '../PostDiscovery';

class HomePage extends Component {
  render () {
    return (
      <Layout title="Blog">
        <PostDiscovery />
      </Layout>
    );
  }
}

export default HomePage;
