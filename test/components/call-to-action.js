import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import CallToAction from '../../src/common/components/CallToAction/index';

describe( 'component', () => {
  describe( '<CallToAction />', () => {
    let callToAction;

    before(() => {
      const renderer = createRenderer();

      renderer.render(
        <CallToAction />
      );

      callToAction = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( callToAction.type ).toBe( 'section' );
      expect( callToAction.props.children.type ).toBe( 'div' );
    });
  });
});
