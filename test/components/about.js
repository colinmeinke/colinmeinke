import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import About from '../../src/common/components/Blog/index';
import Header from '../../src/common/components/Header/index';

describe( 'component', () => {
  describe( '<About />', () => {
    let about;

    before(() => {
      const renderer = TestUtils.createRenderer();

      renderer.render(
        <About />
      );

      about = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( about.props.children.type ).toBe( 'section' );
      expect( about.props.children.props.children[ 0 ].type ).toBe( Header );
    });
  });
});
