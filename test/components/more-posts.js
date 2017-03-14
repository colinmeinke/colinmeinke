/* globals describe it before */

import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import { createStore } from 'redux';
import { Link } from 'universal-redux-router';
import { Provider } from 'react-redux';

import MorePosts from '../../src/common/components/MorePosts/index';
import MorePostsContainer from '../../src/common/components/MorePosts';

describe('component', () => {
  const props = {
    page: 1,
    tags: []
  };

  describe('<MorePosts />', () => {
    let morePosts;

    before(() => {
      const renderer = createRenderer();

      renderer.render(<MorePosts {...props} />);

      morePosts = renderer.getRenderOutput();
    });

    it('should render correct markup', () => {
      expect(morePosts.type).toBe(Link);
    });
  });

  describe('<MorePostsContainer />', () => {
    let morePosts;

    before(() => {
      const store = createStore(() => props);

      const renderer = createRenderer();

      renderer.render(
        <Provider store={store}>
          <MorePostsContainer />
        </Provider>
      );

      morePosts = renderer.getRenderOutput();
    });

    it('should connect to redux store', () => {
      expect(morePosts.type.displayName).toEqual('Connect(MorePosts)');
    });
  });
});
