import expect from 'expect';

import { formatDate } from '../../src/common/helpers';

describe( 'helper', () => {
  describe( 'date', () => {
    describe( 'formatDate()', () => {
      it( 'should correctly format date', () => {
        const date = 'Tue Feb 16 2016 09:18:00 GMT-0600';
        expect( formatDate( date )).toBe( 'February 16, 2016' );
      });
    });
  });
});
