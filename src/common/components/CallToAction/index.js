import React, { Component, PropTypes } from 'react';
import { Link } from 'universal-redux-router';

import { button, callToAction, container, title } from './styles.css';

const defaultProps = {
  className: '',
  linkIsExternal: false,
};

const propTypes = {
  children: PropTypes.oneOfType([ PropTypes.array, PropTypes.string ]),
  className: PropTypes.string,
  linkIsExternal: PropTypes.bool,
  linkText: PropTypes.string.isRequired,
  linkTo: PropTypes.oneOfType([ PropTypes.array, PropTypes.string ]).isRequired,
  title: PropTypes.string.isRequired,
};

class CallToAction extends Component {
  render () {
    return (
      <section className={[ container, this.props.className ].join( ' ' )}>
        <div className={ callToAction }>
          <h2 className={ title }>{ this.props.title }</h2>
          { this.props.children }

          { this.props.linkIsExternal ?
            <a
              className={ button }
              href={ this.props.linkTo }
            >
              { this.props.linkText }
            </a> :
            <Link
              className={ button }
              to={ this.props.linkTo }
            >
              { this.props.linkText }
            </Link>
          }
        </div>
      </section>
    );
  }
}

CallToAction.defaultProps = defaultProps;
CallToAction.propTypes = propTypes;

export default CallToAction;
