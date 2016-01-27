import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import Post from '../../src/common/components/Post/index';

describe( 'component', () => {
  describe( '<Post />', () => {
    let post;

    before(() => {
      const renderer = createRenderer();

      renderer.render(
        <Post />
      );

      post = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( post.props.children.type ).toBe( 'h2' );
    });
  });
});
