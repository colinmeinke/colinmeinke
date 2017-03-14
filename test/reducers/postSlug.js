/* globals describe it */

import expect from 'expect';

import reducer from '../../src/common/reducers/postSlug';
import { UPDATE_POST_SLUG } from '../../src/common/actions/postSlug';

describe('reducer', () => {
  describe('postSlug()', () => {
    it('should return the initial state by default', () => {
      expect(reducer(undefined, {})).toEqual('');
    });

    it('should handle UPDATE_POST_SLUG action type', () => {
      const postSlug = 'hello-world';

      expect(
        reducer('', {
          postSlug,
          type: UPDATE_POST_SLUG
        })
      ).toEqual(postSlug);
    });
  });
});
