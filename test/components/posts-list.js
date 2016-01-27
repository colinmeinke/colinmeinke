import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import Post from '../../src/common/components/Post/index';
import PostsList from '../../src/common/components/PostsList/index';

describe( 'component', () => {
  describe( '<PostsList />', () => {
    let postsList;

    before(() => {
      const props = {
        posts: [{
          title: 'Hello world',
        }],
      };

      const renderer = createRenderer();

      renderer.render(
        <PostsList { ...props } />
      );

      postsList = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( postsList.props.children[ 0 ].type ).toBe( Post );
    });
  });
});
