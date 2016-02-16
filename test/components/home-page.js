import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import PostDiscovery from '../../src/common/components/PostDiscovery';
import Home from '../../src/common/components/HomePage/index';

describe( 'component', () => {
  describe( '<Home />', () => {
    let home;

    before(() => {
      const renderer = createRenderer();

      renderer.render(
        <Home />
      );

      home = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( home.props.children.type ).toBe( PostDiscovery );
    });
  });
});
