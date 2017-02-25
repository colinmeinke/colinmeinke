/* globals describe it before */

import expect from 'expect'
import React from 'react'
import { createRenderer } from 'react-addons-test-utils'

import Projects from '../../src/common/components/ProjectsPage/index'

describe('component', () => {
  describe('<Projects />', () => {
    let projects

    before(() => {
      const renderer = createRenderer()

      renderer.render(
        <Projects />
      )

      projects = renderer.getRenderOutput()
    })

    it('should render correct markup', () => {
      expect(projects.props.children.type).toBe('main')
      expect(projects.props.children.props.children[ 0 ].type).toBe('h1')
    })
  })
})
