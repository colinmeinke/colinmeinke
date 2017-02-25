import React, { Component, PropTypes } from 'react'
import { Link } from 'universal-redux-router'

const defaultProps = {
  activeClassName: '',
  itemClassName: '',
  navClassName: '',
  shouldScrollToTop: true
}

const propTypes = {
  activeClassName: PropTypes.string,
  activeString: PropTypes.string,
  itemClassName: PropTypes.string,
  items: PropTypes.array,
  navClassName: PropTypes.string,
  shouldScrollToTop: PropTypes.bool
}

class Nav extends Component {
  render () {
    return (
      <nav
        className={this.props.navClassName}
        role='navigation'
      >
        { this.props.items.map((item, i) => (
          <Link
            className={[
              this.props.itemClassName,
              (this.props.activeString === item.activeString
                ? this.props.activeClassName
                : null)
            ].join(' ')}
            key={i}
            shouldScrollToTop={this.props.shouldScrollToTop}
            to={item.to}
          >
            { item.name }
          </Link>
        ))}
      </nav>
    )
  }
}

Nav.defaultProps = defaultProps
Nav.propTypes = propTypes

export default Nav
