import DocumentTitle from 'react-document-title';
import React from 'react';

import Footer from '../Footer';
import Header from '../Header';

const Projects = () => (
  <DocumentTitle title="Projects">
    <section>
      <Header />

      <h2>Projects</h2>

      <ul>
        <li>
          <a href="https://github.com/colinmeinke/universal-js">UniversalJS starter-kit</a>
        </li>
        <li>
          <a href="https://github.com/colinmeinke/universal-redux-router">Universal Redux Router</a>
        </li>
        <li>
          <a href="https://github.com/colinmeinke/kampot">Kampot theme for Ghost</a>
        </li>
        <li>
          <a href="https://github.com/colinmeinke/postcss-custom-props">Custom props plugin for PostCSS</a>
        </li>
        <li>
          <a href="https://github.com/colinmeinke/postcss-calc-function">Calc function plugin for PostCSS</a>
        </li>
        <li>
          <a href="https://github.com/colinmeinke/oaxaca-syntax-theme">Oaxaca syntax theme for Atom</a>
        </li>
      </ul>

      <Footer />
    </section>
  </DocumentTitle>
);

export default Projects;
