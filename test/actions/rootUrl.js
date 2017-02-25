/* globals describe it */

import expect from 'expect'

import { UPDATE_ROOT_URL, updateRootUrl } from '../../src/common/actions/rootUrl'

describe('action creator', () => {
  describe('rootUrl', () => {
    describe('updateRootUrl()', () => {
      it('should create an action to update rootUrl', () => {
        const protocol = 'https'
        const host = 'www.colinmeinke.com'

        const expectedAction = {
          type: UPDATE_ROOT_URL,
          url: `${protocol}://${host}`
        }

        expect(updateRootUrl(protocol, host)).toEqual(expectedAction)
      })
    })
  })
})
