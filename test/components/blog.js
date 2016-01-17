import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Blog from '../../src/common/components/Blog/index';
import Header from '../../src/common/components/Header/index';

describe( 'component', () => {
  describe( '<Blog />', () => {
    let blog;

    before(() => {
      const renderer = TestUtils.createRenderer();

      renderer.render(
        <Blog />
      );

      blog = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( blog.props.children.type ).toBe( 'section' );
      expect( blog.props.children.props.children[ 0 ].type ).toBe( Header );
    });
  });
});
