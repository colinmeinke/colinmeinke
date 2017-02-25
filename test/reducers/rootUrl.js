/* globals describe it */

import expect from 'expect'

import reducer from '../../src/common/reducers/rootUrl'
import { UPDATE_ROOT_URL } from '../../src/common/actions/rootUrl'

describe('reducer', () => {
  describe('rootUrl()', () => {
    it('should return the initial state by default', () => {
      expect(reducer(undefined, {})).toEqual('')
    })

    it('should handle UPDATE_ROOT_URL action type', () => {
      const url = 'https://www.colinmeinke.com'

      expect(reducer('', {
        type: UPDATE_ROOT_URL,
        url
      })).toEqual(url)
    })
  })
})
