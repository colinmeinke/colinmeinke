/* globals describe it */

import expect from 'expect'

import reducer from '../../src/common/reducers/postLoading'
import { POST_LOADED, POST_LOADING } from '../../src/common/actions/postLoading'

describe('reducer', () => {
  describe('postLoading()', () => {
    it('should return the initial state by default', () => {
      expect(reducer(undefined, {})).toEqual(true)
    })

    it('should handle POST_LOADED action type', () => {
      expect(reducer('', { type: POST_LOADED }))
        .toEqual(false)
    })

    it('should handle POST_LOADING action type', () => {
      expect(reducer('', { type: POST_LOADING }))
        .toEqual(true)
    })
  })
})
