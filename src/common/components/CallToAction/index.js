import React, { Component } from 'react';
import { Link } from 'universal-redux-router';

import { button, callToAction, container, title } from './styles.css';

class CallToAction extends Component {
  render () {
    return (
      <section className={ container }>
        <div className={ callToAction }>
          <h3 className={ title }>
            I'm taking on new projects in 2016.
          </h3>
          <Link
            className={ button }
            to="/work-with-me"
          >
            Discuss working with me remotely
          </Link>
        </div>
      </section>
    );
  }
}

export default CallToAction;
