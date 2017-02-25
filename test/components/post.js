/* globals describe it before */

import expect from 'expect'
import React from 'react'
import { createRenderer } from 'react-addons-test-utils'

import Post from '../../src/common/components/Post/index'

describe('component', () => {
  describe('<Post />', () => {
    let post

    const props = {
      datePublished: '13 February 2017',
      description: '',
      locationPublished: 'Hanoi, Vietnam',
      slug: 'hello-world',
      tags: [ 'coding' ],
      title: 'Hello world'
    }

    before(() => {
      const renderer = createRenderer()

      renderer.render(
        <Post {...props} />
      )

      post = renderer.getRenderOutput()
    })

    it('should render correct markup', () => {
      expect(post.props.children[ 0 ].type).toBe('h1')
    })
  })
})
