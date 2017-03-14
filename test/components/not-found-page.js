/* globals describe it before */

import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import NotFound from '../../src/common/components/NotFoundPage/index';

describe('component', () => {
  describe('<NotFound />', () => {
    let notFound;

    before(() => {
      const renderer = createRenderer();

      renderer.render(<NotFound />);

      notFound = renderer.getRenderOutput();
    });

    it('should render correct markup', () => {
      expect(notFound.props.children.type).toBe('main');
      expect(notFound.props.children.props.children.type).toBe('h1');
    });
  });
});
