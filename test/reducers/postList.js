/* globals describe it */

import expect from 'expect';

import reducer from '../../src/common/reducers/postList';
import { UPDATE_POST_LIST } from '../../src/common/actions/postList';

describe('reducer', () => {
  describe('postList()', () => {
    it('should return the initial state by default', () => {
      expect(reducer(undefined, [])).toEqual([]);
    });

    it('should handle UPDATE_POST_LIST action type', () => {
      const postList = [
        {
          datePublished: '10 February, 2016',
          description: '',
          locationPublished: 'Hanoi, Vietnam',
          slug: 'hello-world',
          tags: ['coding'],
          title: 'Hello world'
        }
      ];

      expect(
        reducer('', {
          postList,
          type: UPDATE_POST_LIST
        })
      ).toEqual(postList);
    });
  });
});
