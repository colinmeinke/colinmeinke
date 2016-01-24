import expect from 'expect';

import { createUrlFromTags, getTagsFromUrl } from '../../src/common/helpers/tags';

describe( 'helper', () => {
  describe( 'tags', () => {
    describe( 'createUrlFromTags()', () => {
      it( 'should not include tags param by default', () => {
        const expectedUrl = '/';
        expect( createUrlFromTags()).toEqual( expectedUrl );
      });

      it( 'should work with a single tag', () => {
        const tags = [ 'hello-world' ];
        const expectedUrl = '/?tags=hello-world';
        expect( createUrlFromTags( tags )).toEqual( expectedUrl );
      });

      it( 'should work with multiple tags', () => {
        const tags = [ 'hello', 'world' ];
        const expectedUrl = '/?tags=hello+world';
        expect( createUrlFromTags( tags )).toEqual( expectedUrl );
      });
    });

    describe( 'getTagsFromUrl()', () => {
      it( 'should return an empty array by default', () => {
        const expectedTags = [];
        expect( getTagsFromUrl()).toEqual( expectedTags );
      });

      it( 'should work with an absolute url', () => {
        const url = 'http://colinmeinke.com/?tags=hello+world';
        const expectedTags = [ 'hello', 'world' ];
        expect( getTagsFromUrl( url )).toEqual( expectedTags );
      });

      it( 'should work with a relative url', () => {
        const url = '/?tags=hello+world';
        const expectedTags = [ 'hello', 'world' ];
        expect( getTagsFromUrl( url )).toEqual( expectedTags );
      });

      it( 'should work when tags is not the first url param', () => {
        const url = '/?foo=bar&tags=hello+world';
        const expectedTags = [ 'hello', 'world' ];
        expect( getTagsFromUrl( url )).toEqual( expectedTags );
      });

      it( 'should work with a single tag', () => {
        const url = '/?tags=hello-world';
        const expectedTags = [ 'hello-world' ];
        expect( getTagsFromUrl( url )).toEqual( expectedTags );
      });

      it( 'should work with multiple `+` seperated tags', () => {
        const url = '/?tags=hello+world';
        const expectedTags = [ 'hello', 'world' ];
        expect( getTagsFromUrl( url )).toEqual( expectedTags );
      });

      it( 'should work with multiple ` ` seperated tags', () => {
        const url = '/?tags=hello world';
        const expectedTags = [ 'hello', 'world' ];
        expect( getTagsFromUrl( url )).toEqual( expectedTags );
      });

      it( 'should work with multiple `%20` seperated tags', () => {
        const url = '/?tags=hello%20world';
        const expectedTags = [ 'hello', 'world' ];
        expect( getTagsFromUrl( url )).toEqual( expectedTags );
      });
    });
  });
});
