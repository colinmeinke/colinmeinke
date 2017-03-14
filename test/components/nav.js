/* globals describe it before */

import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import Nav from '../../src/common/components/Nav/index';

describe('component', () => {
  describe('<Nav />', () => {
    let nav;

    before(() => {
      const props = {
        items: [
          { name: 'hello', url: '/hello' },
          { name: 'world', url: '/world' }
        ]
      };

      const renderer = createRenderer();

      renderer.render(<Nav {...props} />);

      nav = renderer.getRenderOutput();
    });

    it('should render correct markup', () => {
      expect(nav.type).toBe('nav');
      expect(nav.props.children[0].type.displayName).toBe('Connect(Link)');
    });
  });
});
