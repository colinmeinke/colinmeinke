import DocumentTitle from 'react-document-title';
import React from 'react';

import Footer from '../Footer';
import Header from '../Header';

import baseStyles from './base.css';

const projects = [
  {
    name: 'UniversalJS starter-kit',
    url: 'https://github.com/colinmeinke/universal-js',
  },
  {
    name: 'Universal Redux Router',
    url: 'https://github.com/colinmeinke/universal-redux-router',
  },
  {
    name: 'Kampot theme for Ghost',
    url: 'https://github.com/colinmeinke/kampot',
  },
  {
    name: 'Oaxaca syntax theme for Atom',
    url: 'https://github.com/colinmeinke/oaxaca-syntax-theme',
  },
  {
    name: 'Custom props plugin for PostCSS',
    url: 'https://github.com/colinmeinke/postcss-custom-props',
  },
  {
    name: 'Calc function plugin for PostCSS',
    url: 'https://github.com/colinmeinke/postcss-calc-function',
  },
];

const Projects = () => (
  <DocumentTitle title="Projects">
    <section>
      <Header />

      <section className={ baseStyles.containter }>
        <h2 className={ baseStyles.title }>Projects</h2>

        <ul>
          { projects.map(( project, i ) => (
            <li key={ i }>
              <a
                className={ baseStyles.link }
                href={ project.url }
              >
                { project.name }
              </a>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </section>
  </DocumentTitle>
);

export default Projects;
