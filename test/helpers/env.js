import expect from 'expect';

import { getEnv, isNode } from '../../src/common/helpers';

describe( 'helper', () => {
  describe( 'env', () => {
    describe( 'getEnv()', () => {
      it( 'should return development when env not defined', () => {
        expect( getEnv()).toBe( 'development' );
      });
    });

    describe( 'isNode()', () => {
      it( 'should return true when node', () => {
        expect( isNode()).toBe( true );
      });
    });
  });
});
