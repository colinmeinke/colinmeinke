/* globals describe it */

import expect from 'expect'

import reducer from '../../src/common/reducers/postListLoading'
import { POST_LIST_LOADED, POST_LIST_LOADING } from '../../src/common/actions/postListLoading'

describe('reducer', () => {
  describe('postListLoading()', () => {
    it('should return the initial state by default', () => {
      expect(reducer(undefined, {})).toEqual(true)
    })

    it('should handle POST_LIST_LOADED action type', () => {
      expect(reducer('', { type: POST_LIST_LOADED }))
        .toEqual(false)
    })

    it('should handle POST_LIST_LOADING action type', () => {
      expect(reducer('', { type: POST_LIST_LOADING }))
        .toEqual(true)
    })
  })
})
