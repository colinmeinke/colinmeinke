import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Header from '../../src/common/components/Header/index';
import HeaderContainer from '../../src/common/components/Header';

describe( 'component', () => {
  describe( '<Header />', () => {
    let header;

    before(() => {
      const renderer = TestUtils.createRenderer();

      renderer.render(
        <Header />
      );

      header = renderer.getRenderOutput();
    });

    it( 'should render correct markup', () => {
      expect( header.type ).toBe( 'header' );
      expect( header.props.children[ 0 ].type ).toBe( 'h1' );
    });
  });

  describe( '<HeaderContainer />', () => {
    let header;

    const props = {
      url: '/projects',
    };

    before(() => {
      const store = createStore(() => props );

      const renderer = TestUtils.createRenderer();

      renderer.render(
        <Provider store={ store }>
          <HeaderContainer { ...props } />
        </Provider>
      );

      header = renderer.getRenderOutput();
    });

    it( 'should connect to redux store', () => {
      expect( header.type.displayName ).toEqual( 'Connect(Header)' );
    });
  });
});
