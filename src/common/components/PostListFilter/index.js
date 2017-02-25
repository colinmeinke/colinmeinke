import React, { Component, PropTypes } from 'react'

import { filters } from '../../config/posts'

import Nav from '../Nav'

import { active, item, nav } from './styles.css'

const createActiveString = arr => [ ...arr ].sort().join('+')

const items = filters.map(({ name, tags }) => ({
  activeString: createActiveString(tags),
  name,
  to: [ '/', { tags } ]
}))

const propTypes = {
  tags: PropTypes.array
}

class PostListFilter extends Component {
  render () {
    return (
      <section>
        <Nav
          activeClassName={active}
          activeString={createActiveString(this.props.tags)}
          itemClassName={item}
          items={items}
          navClassName={nav}
          shouldScrollToTop={false}
        />
      </section>
    )
  }
}

PostListFilter.propTypes = propTypes

export default PostListFilter
