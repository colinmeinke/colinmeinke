import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Projects from '../../src/common/components/Projects/index';

describe( 'component', () => {
  describe( '<Projects />', () => {
    let projects;

    before(() => {
      const renderer = TestUtils.createRenderer();

      renderer.render(
        <Projects />
      );

      projects = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( projects.props.children.type ).toBe( 'section' );
      expect( projects.props.children.props.children[ 0 ].type ).toBe( 'h2' );
    });
  });
});
