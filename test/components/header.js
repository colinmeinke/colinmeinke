/* globals describe it before */

import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Header from '../../src/common/components/Header/index';
import HeaderContainer from '../../src/common/components/Header';

describe('component', () => {
  describe('<Header />', () => {
    let header;

    before(() => {
      const props = {
        url: '/'
      };

      const renderer = createRenderer();

      renderer.render(<Header {...props} />);

      header = renderer.getRenderOutput();
    });

    it('should render correct markup', () => {
      expect(header.type).toBe('header');
      expect(header.props.children.type).toBe('div');
    });
  });

  describe('<HeaderContainer />', () => {
    let header;

    const props = {
      url: '/projects'
    };

    before(() => {
      const store = createStore(() => props);

      const renderer = createRenderer();

      renderer.render(
        <Provider store={store}>
          <HeaderContainer {...props} />
        </Provider>
      );

      header = renderer.getRenderOutput();
    });

    it('should connect to redux store', () => {
      expect(header.type.displayName).toEqual('Connect(Header)');
    });
  });
});
