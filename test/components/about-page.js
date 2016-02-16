import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import About from '../../src/common/components/AboutPage/index';

describe( 'component', () => {
  describe( '<About />', () => {
    let about;

    before(() => {
      const renderer = createRenderer();

      renderer.render(
        <About />
      );

      about = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( about.props.children.type ).toBe( 'section' );
      expect( about.props.children.props.children[ 0 ].type ).toBe( 'h2' );
    });
  });
});
