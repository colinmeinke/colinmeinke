import expect from 'expect';

import reducer from '../../src/common/reducers/tags';
import { UPDATE_TAGS } from '../../src/common/actions/tags';

describe( 'reducer', () => {
  describe( 'tags()', () => {
    it( 'should return the initial state by default', () => {
      expect( reducer( undefined, {})).toEqual([]);
    });

    it( 'should handle UPDATE_TAGS action type', () => {
      const tags = [ 'hello', 'world' ];

      expect( reducer( '', {
        tags,
        type: UPDATE_TAGS,
      })).toEqual( tags );
    });
  });
});
