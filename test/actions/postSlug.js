/* globals describe it */

import expect from 'expect';

import {
  UPDATE_POST_SLUG,
  updatePostSlug
} from '../../src/common/actions/postSlug';

describe('action creator', () => {
  describe('postSlug', () => {
    describe('updatePostSlug()', () => {
      it('should create an action to update postSlug', () => {
        const postSlug = 'hello-world';

        const expectedAction = {
          postSlug,
          type: UPDATE_POST_SLUG
        };

        expect(updatePostSlug(postSlug)).toEqual(expectedAction);
      });
    });
  });
});
