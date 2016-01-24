import expect from 'expect';

import { UPDATE_TAGS, updateTags } from '../../src/common/actions/tags';

describe( 'action creator', () => {
  describe( 'tags', () => {
    describe( 'updateTags()', () => {
      it( 'should create an action to update tags', () => {
        const tags = [ 'hello', 'world' ];

        const expectedAction = {
          type: UPDATE_TAGS,
          tags,
        };

        expect( updateTags( tags )).toEqual( expectedAction );
      });
    });
  });
});
