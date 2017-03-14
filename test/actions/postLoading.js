/* globals describe it */

import expect from 'expect';

import {
  POST_LOADED,
  POST_LOADING,
  postLoaded,
  postLoading
} from '../../src/common/actions/postLoading';

describe('action creator', () => {
  describe('postLoading', () => {
    describe('postLoaded()', () => {
      it('should create an action to update postLoading', () => {
        const expectedAction = { type: POST_LOADED };
        expect(postLoaded()).toEqual(expectedAction);
      });
    });

    describe('postLoaded()', () => {
      it('should create an action to update postLoading', () => {
        const expectedAction = { type: POST_LOADING };
        expect(postLoading()).toEqual(expectedAction);
      });
    });
  });
});
