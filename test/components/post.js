import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import Post from '../../src/common/components/Post/index';

describe( 'component', () => {
  describe( '<Post />', () => {
    let post;

    const props = {
      tags: [ 'coding' ],
      title: 'Hello world',
    };

    before(() => {
      const renderer = createRenderer();

      renderer.render(
        <Post { ...props } />
      );

      post = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( post.props.children[ 0 ].type ).toBe( 'h2' );
    });
  });
});
