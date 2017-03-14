import React, { Component } from 'react';

import { container, footer } from './styles.css';

class Footer extends Component {
  render() {
    return (
      <footer className={container}>
        <div className={footer} />
      </footer>
    );
  }
}

export default Footer;
