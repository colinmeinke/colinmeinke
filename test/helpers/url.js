import expect from 'expect';

import { development } from '../../src/common/config';
import { getRootUrl } from '../../src/common/helpers';

describe( 'helper', () => {
  describe( 'url', () => {
    describe( 'getRootUrl()', () => {
      it( 'should get correct development url', () => {
        expect( getRootUrl()).toBe( `http://localhost:${ development.location.port }` );
      });
    });
  });
});
