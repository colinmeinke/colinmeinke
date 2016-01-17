import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Header from '../../src/common/components/Header/index';

describe( 'component', () => {
  describe( '<Header />', () => {
    let header;

    before(() => {
      const renderer = TestUtils.createRenderer();

      renderer.render(
        <Header />
      );

      header = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( header.type ).toBe( 'header' );
      expect( header.props.children[ 0 ].type ).toBe( 'h1' );
    });
  });
});
