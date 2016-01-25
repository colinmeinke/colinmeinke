import React from 'react';

import Layout from '../Layout';

import baseStyles from './base.css';

const projects = [
  {
    description: `A universal Javascript starter kit inc. React, Redux, Redux
                  Dev Tools, Universal Redux Router, CSS Modules, hot module
                  reloading, Babel for ES2015+ and ESLint.`,
    name: 'UniversalJS',
    url: 'https://github.com/colinmeinke/universal-js',
  },
  {
    description: `A very simple router for Redux and React that works on both
                  server and client.`,
    name: 'Universal Redux Router',
    url: 'https://github.com/colinmeinke/universal-redux-router',
  },
  {
    description: 'A responsive theme for Ghost.',
    name: 'Kampot',
    url: 'https://github.com/colinmeinke/kampot',
  },
  {
    description: 'A minimal syntax theme for Atom.',
    name: 'Oaxaca syntax theme',
    url: 'https://github.com/colinmeinke/oaxaca-syntax-theme',
  },
  {
    description: 'A PostCSS plugin to resolve the CSS calc function.',
    name: 'PostCSS custom props',
    url: 'https://github.com/colinmeinke/postcss-custom-props',
  },
  {
    description: 'A PostCSS plugin to enable CSS Custom Properties (CSS variables).',
    name: 'PostCSS calc function',
    url: 'https://github.com/colinmeinke/postcss-calc-function',
  },
];

const Projects = () => (
  <Layout title="Projects">
    <section className={ baseStyles.containter }>
      <h2 className={ baseStyles.title }>Projects</h2>

      <ul className={ baseStyles.projectList }>
        { projects.map(( project, i ) => (
          <li
            className={ baseStyles.projectItem }
            key={ i }
          >
            <h3 className={ baseStyles.projectTitle }>
              { project.name }
            </h3>

            <p className={ baseStyles.projectDescription }>
              { project.description }
            </p>

            <a
              className={ baseStyles.projectLink }
              href={ project.url }
            >
              View on github
            </a>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
);

export default Projects;
