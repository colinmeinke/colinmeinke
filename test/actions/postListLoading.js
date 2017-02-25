/* globals describe it */

import expect from 'expect'

import {
  POST_LIST_LOADED,
  POST_LIST_LOADING,
  postListLoaded,
  postListLoading
} from '../../src/common/actions/postListLoading'

describe('action creator', () => {
  describe('postListLoading', () => {
    describe('postListLoaded()', () => {
      it('should create an action to update postListLoading', () => {
        const expectedAction = { type: POST_LIST_LOADED }
        expect(postListLoaded()).toEqual(expectedAction)
      })
    })

    describe('postListLoaded()', () => {
      it('should create an action to update postListLoading', () => {
        const expectedAction = { type: POST_LIST_LOADING }
        expect(postListLoading()).toEqual(expectedAction)
      })
    })
  })
})
