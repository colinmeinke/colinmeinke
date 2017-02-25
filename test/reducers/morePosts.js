/* globals describe it */

import expect from 'expect'

import reducer from '../../src/common/reducers/morePosts'
import { UPDATE_MORE_POSTS } from '../../src/common/actions/morePosts'

describe('reducer', () => {
  describe('morePosts()', () => {
    it('should return the initial state by default', () => {
      expect(reducer(undefined, {})).toEqual(false)
    })

    it('should handle UPDATE_MORE_POSTS action type', () => {
      const morePosts = true

      expect(reducer('', {
        morePosts,
        type: UPDATE_MORE_POSTS
      })).toEqual(morePosts)
    })
  })
})
