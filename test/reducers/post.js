/* globals describe it */

import expect from 'expect'

import reducer from '../../src/common/reducers/post'
import { UPDATE_POST } from '../../src/common/actions/post'

describe('reducer', () => {
  describe('post()', () => {
    it('should return the initial state by default', () => {
      expect(reducer(undefined, {})).toEqual({})
    })

    it('should handle UPDATE_POST action type', () => {
      const post = {
        content: 'Hello world...',
        datePublished: '10 February, 2016',
        description: '',
        locationPublished: 'Hanoi, Vietnam',
        slug: 'hello-world',
        tags: [ 'coding' ],
        title: 'Hello world'
      }

      expect(reducer('', {
        post,
        type: UPDATE_POST
      })).toEqual(post)
    })
  })
})
