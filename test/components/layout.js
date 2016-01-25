import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import Layout from '../../src/common/components/Layout/index';

describe( 'component', () => {
  describe( '<Layout />', () => {
    let layout;

    before(() => {
      const renderer = createRenderer();

      renderer.render(
        <Layout />
      );

      layout = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( layout.props.children.type ).toBe( 'section' );
      expect( layout.props.children.props.children[ 0 ].type.displayName )
        .toBe( 'Connect(Header)' );
    });
  });
});
