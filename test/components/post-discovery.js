/* globals describe it before */

import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import PostDiscovery from '../../src/common/components/PostDiscovery/index';
import PostDiscoveryContainer from '../../src/common/components/PostDiscovery';

describe('component', () => {
  const props = {
    morePosts: false,
    page: 1,
    postList: []
  };

  describe('<PostDiscovery />', () => {
    let postDiscovery;

    before(() => {
      const renderer = createRenderer();

      renderer.render(<PostDiscovery {...props} />);

      postDiscovery = renderer.getRenderOutput();
    });

    it('should render correct markup', () => {
      expect(postDiscovery.type).toBe('section');
      expect(postDiscovery.props.children[0].type).toBe('header');
    });
  });

  describe('<PostDiscoveryContainer />', () => {
    let postDiscovery;

    before(() => {
      const store = createStore(() => props);

      const renderer = createRenderer();

      renderer.render(
        <Provider store={store}>
          <PostDiscoveryContainer />
        </Provider>
      );

      postDiscovery = renderer.getRenderOutput();
    });

    it('should connect to redux store', () => {
      expect(postDiscovery.type.displayName).toEqual('Connect(PostDiscovery)');
    });
  });
});
