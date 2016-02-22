import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import WorkWithMe from '../../src/common/components/WorkWithMePage/index';

describe( 'component', () => {
  describe( '<WorkWithMe />', () => {
    let workWithMe;

    before(() => {
      const renderer = createRenderer();

      renderer.render(
        <WorkWithMe />
      );

      workWithMe = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( workWithMe.props.children.type ).toBe( 'main' );
      expect( workWithMe.props.children.props.children[ 0 ].type ).toBe( 'h1' );
    });
  });
});
