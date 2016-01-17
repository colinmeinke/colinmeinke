import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Header from '../../src/common/components/Header/index';
import NotFound from '../../src/common/components/Blog/index';

describe( 'component', () => {
  describe( '<NotFound />', () => {
    let notFound;

    before(() => {
      const renderer = TestUtils.createRenderer();

      renderer.render(
        <NotFound />
      );

      notFound = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( notFound.props.children.type ).toBe( 'section' );
      expect( notFound.props.children.props.children[ 0 ].type ).toBe( Header );
    });
  });
});
