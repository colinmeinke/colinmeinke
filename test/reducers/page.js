/* globals describe it */

import expect from 'expect';

import reducer from '../../src/common/reducers/page';
import { UPDATE_PAGE } from '../../src/common/actions/page';

describe('reducer', () => {
  describe('page()', () => {
    it('should return the initial state by default', () => {
      expect(reducer(undefined, {})).toEqual(1);
    });

    it('should handle UPDATE_PAGE action type', () => {
      const page = 5;

      expect(
        reducer('', {
          page,
          type: UPDATE_PAGE
        })
      ).toEqual(page);
    });
  });
});
