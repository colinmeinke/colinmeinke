/* globals describe it */

import expect from 'expect'

import { postsPerPage } from '../../src/common/config/posts'

import { UPDATE_MORE_POSTS, updateMorePosts } from '../../src/common/actions/morePosts'

describe('action creator', () => {
  describe('morePosts', () => {
    describe('updateMorePosts()', () => {
      it('should create an action to update morePosts', () => {
        const page = 1
        const postList = [{}, {}, {}, {}]

        const morePosts = postList.length > (page * postsPerPage)

        const expectedAction = {
          morePosts,
          type: UPDATE_MORE_POSTS
        }

        expect(updateMorePosts({ page, postList })).toEqual(expectedAction)
      })
    })
  })
})
