import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import Post from '../../src/common/components/Post/index';
import PostList from '../../src/common/components/PostList/index';

describe( 'component', () => {
  describe( '<PostList />', () => {
    let postList;

    before(() => {
      const props = {
        posts: [{
          datePublished: '10 February, 2016',
          description: '',
          locationPublished: 'Hanoi, Vietnam',
          slug: 'hello-world',
          tags: [ 'coding' ],
          title: 'Hello world',
        }],
        tags: [],
      };

      const renderer = createRenderer();

      renderer.render(
        <PostList { ...props } />
      );

      postList = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( postList.props.children[ 0 ].type ).toBe( Post );
    });
  });
});
