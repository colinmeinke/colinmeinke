import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import WorkWithMe from '../../src/common/components/Blog/index';

describe( 'component', () => {
  describe( '<WorkWithMe />', () => {
    let workWithMe;

    before(() => {
      const renderer = TestUtils.createRenderer();

      renderer.render(
        <WorkWithMe />
      );

      workWithMe = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( workWithMe.props.children.type ).toBe( 'section' );
      expect( workWithMe.props.children.props.children[ 0 ].type.displayName )
        .toBe( 'Connect(Header)' );
    });
  });
});
