import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import Footer from '../../src/common/components/Footer/index';

describe( 'component', () => {
  describe( '<Footer />', () => {
    let footer;

    before(() => {
      const renderer = createRenderer();

      renderer.render(
        <Footer />
      );

      footer = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( footer.type ).toBe( 'footer' );
      expect( footer.props.children[ 0 ].type ).toBe( 'p' );
    });
  });
});
