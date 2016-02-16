import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import PostListFilter from '../../src/common/components/PostListFilter/index';
import PostListFilterContainer from '../../src/common/components/PostListFilter';

describe( 'component', () => {
  const props = {
    tags: [ 'hello', 'world' ],
  };

  describe( '<PostListFilter />', () => {
    let postListFilter;

    before(() => {
      const renderer = createRenderer();

      renderer.render(
        <PostListFilter { ...props } />
      );

      postListFilter = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( postListFilter.type ).toBe( 'section' );
    });
  });

  describe( '<PostListFilterContainer />', () => {
    let postListFilter;

    before(() => {
      const store = createStore(() => props );

      const renderer = createRenderer();

      renderer.render(
        <Provider store={ store }>
          <PostListFilterContainer />
        </Provider>
      );

      postListFilter = renderer.getRenderOutput();
    });

    it( 'should connect to redux store', () => {
      expect( postListFilter.type.displayName ).toEqual( 'Connect(PostListFilter)' );
    });
  });
});
