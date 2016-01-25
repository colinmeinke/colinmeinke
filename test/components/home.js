import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Blog from '../../src/common/components/Blog';
import Home from '../../src/common/components/Home/index';

describe( 'component', () => {
  describe( '<Home />', () => {
    let home;

    before(() => {
      const renderer = TestUtils.createRenderer();

      renderer.render(
        <Home />
      );

      home = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( home.props.children.type ).toBe( Blog );
    });
  });
});
