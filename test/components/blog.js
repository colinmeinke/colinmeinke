import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import Blog from '../../src/common/components/Blog/index';

describe( 'component', () => {
  describe( '<Blog />', () => {
    let blog;

    before(() => {
      const renderer = createRenderer();

      renderer.render(
        <Blog />
      );

      blog = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( blog.type ).toBe( 'section' );
      expect( blog.props.children.type ).toBe( 'header' );
    });
  });
});
