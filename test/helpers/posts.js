import expect from 'expect';

import { formatDate, formatPosts } from '../../src/common/helpers';

describe( 'helper', () => {
  describe( 'posts', () => {
    describe( 'formatPosts()', () => {
      it( 'should correctly format posts', () => {
        const date = 'Sat Feb 16 2016 09:18:00 GMT-0600';
        const formattedDate = formatDate( date );

        const postList = [{
          datePublished: 'Sat Feb 16 2016 09:18:00 GMT-0600',
          description: '',
          locationPublished: 'Hanoi, Vietnam',
          slug: 'hello-world',
          tags: [ 'coding' ],
          title: 'Hello world',
        }];

        const expectedPost = {
          ...postList[ 0 ],
          datePublished: formattedDate,
        };

        expect( formatPosts( postList )).toEqual([ expectedPost ]);
      });
    });
  });
});
