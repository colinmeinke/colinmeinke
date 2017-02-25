/* globals describe it before */

import expect from 'expect'
import React from 'react'
import { createRenderer } from 'react-addons-test-utils'

import CallToAction from '../../src/common/components/CallToAction/index'

describe('component', () => {
  describe('<CallToAction />', () => {
    let callToAction

    before(() => {
      const props = {
        linkText: 'Do it',
        linkTo: '/',
        title: 'Hello world'
      }

      const renderer = createRenderer()

      renderer.render(
        <CallToAction {...props} />
      )

      callToAction = renderer.getRenderOutput()
    })

    it('should render correct markup', () => {
      expect(callToAction.type).toBe('section')
      expect(callToAction.props.children.type).toBe('div')
    })
  })
})
