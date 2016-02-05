import expect from 'expect';

import { tagMatch } from '../../src/common/helpers/tags';

describe( 'helper', () => {
  describe( 'tags', () => {
    describe( 'tagMatch()', () => {
      it( 'should return false by default', () => {
        expect( tagMatch()).toBe( false );
      });

      it( 'should return false when no items match', () => {
        expect( tagMatch([ 'hello' ], [ 'world' ])).toBe( false );
      });

      it( 'should return true when one item matches', () => {
        expect( tagMatch([ 'hello', 'world' ], [ 'hola', 'world' ])).toBe( true );
      });

      it( 'should return true when mutliple items match', () => {
        expect( tagMatch([ 'hello', 'world' ], [ 'hello', 'world' ])).toBe( true );
      });
    });
  });
});
