import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import PostsFilter from '../../src/common/components/PostsFilter/index';
import PostsFilterContainer from '../../src/common/components/PostsFilter';

describe( 'component', () => {
  const props = {
    tags: [ 'hello', 'world' ],
  };

  describe( '<PostsFilter />', () => {
    let postsFilter;

    before(() => {
      const renderer = createRenderer();

      renderer.render(
        <PostsFilter { ...props } />
      );

      postsFilter = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( postsFilter.type ).toBe( 'section' );
    });
  });

  describe( '<PostsFilterContainer />', () => {
    let postsFilter;

    before(() => {
      const store = createStore(() => props );

      const renderer = createRenderer();

      renderer.render(
        <Provider store={ store }>
          <PostsFilterContainer />
        </Provider>
      );

      postsFilter = renderer.getRenderOutput();
    });

    it( 'should connect to redux store', () => {
      expect( postsFilter.type.displayName ).toEqual( 'Connect(PostsFilter)' );
    });
  });
});
