import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Blog from '../../src/common/components/Blog/index';
import BlogContainer from '../../src/common/components/Blog';

describe( 'component', () => {
  const props = {
    morePosts: false,
    page: 1,
    posts: [],
  };

  describe( '<Blog />', () => {
    let blog;

    before(() => {
      const renderer = createRenderer();

      renderer.render(
        <Blog { ...props } />
      );

      blog = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( blog.type ).toBe( 'section' );
      expect( blog.props.children.type ).toBe( 'header' );
    });
  });

  describe( '<BlogContainer />', () => {
    let blog;

    before(() => {
      const store = createStore(() => props );

      const renderer = createRenderer();

      renderer.render(
        <Provider store={ store }>
          <BlogContainer { ...props } />
        </Provider>
      );

      blog = renderer.getRenderOutput();
    });

    it( 'should connect to redux store', () => {
      expect( blog.type.displayName ).toEqual( 'Connect(Blog)' );
    });
  });
});
