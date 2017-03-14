/* globals describe it */

import expect from 'expect';

import { UPDATE_PAGE, updatePage } from '../../src/common/actions/page';

describe('action creator', () => {
  describe('page', () => {
    describe('updatePage()', () => {
      it('should create an action to update page', () => {
        const page = 5;

        const expectedAction = {
          page,
          type: UPDATE_PAGE
        };

        expect(updatePage(page)).toEqual(expectedAction);
      });
    });
  });
});
