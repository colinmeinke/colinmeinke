import React, { Component } from 'react';

import Layout from '../Layout';

import {
  container,
  description,
  projectList,
  section,
  title
} from './styles.css';

const projects = [
  {
    description: `A universal Javascript starter kit inc. React, Redux, Redux
                  Dev Tools, Universal Redux Router, CSS Modules, hot module
                  reloading, Babel for ES2015+ and ESLint.`,
    name: 'UniversalJS',
    url: 'https://github.com/colinmeinke/universal-js'
  },
  {
    description: `A very simple router for Redux and React that works on both
                  server and client.`,
    name: 'Universal Redux Router',
    url: 'https://github.com/colinmeinke/universal-redux-router'
  },
  {
    description: 'Animated SVG charts for React.',
    name: 'React SVG chart',
    url: 'https://github.com/colinmeinke/react-svg-chart'
  },
  {
    description: 'Animate between SVG shapes.',
    name: 'SVG tween',
    url: 'https://github.com/colinmeinke/svg-tween'
  },
  {
    description: `A specification for storing shape data in Javascript. Includes
                  functions for adding, removing, reordering and converting
                  points.`,
    name: 'Points',
    url: 'https://github.com/colinmeinke/points'
  },
  {
    description: `A specification for storing SVG shape data in Javascript.
                  Includes functions for converting to and from a point object
                  shape array.`,
    name: 'SVG points',
    url: 'https://github.com/colinmeinke/svg-points'
  },
  {
    description: 'A little tweening library.',
    name: 'Tweening',
    url: 'https://github.com/colinmeinke/tweening'
  },
  {
    description: 'Color middleware for tweening.',
    name: 'Tweening Color Middleware',
    url: 'https://github.com/colinmeinke/tweening-color-middleware'
  },
  {
    description: 'A responsive theme for Ghost.',
    name: 'Kampot',
    url: 'https://github.com/colinmeinke/kampot'
  },
  {
    description: 'Travel blog.',
    name: 'Peeking Duck',
    url: 'http://peekingduck.co'
  },
  {
    description: 'A minimal syntax theme for Atom.',
    name: 'Oaxaca syntax theme',
    url: 'https://github.com/colinmeinke/oaxaca-syntax-theme'
  },
  {
    description: 'A PostCSS plugin to resolve the CSS calc function.',
    name: 'PostCSS custom props',
    url: 'https://github.com/colinmeinke/postcss-custom-props'
  },
  {
    description: 'A PostCSS plugin to enable CSS Custom Properties (CSS variables).',
    name: 'PostCSS calc function',
    url: 'https://github.com/colinmeinke/postcss-calc-function'
  },
  {
    description: 'An extensible shared config for ESLint.',
    name: 'Spaced',
    url: 'https://github.com/colinmeinke/eslint-config-spaced'
  }
];

class ProjectsPage extends Component {
  render() {
    return (
      <Layout description="Projects page" title="Projects">
        <main className={container} role="main">
          <h1 className={title}>Projects</h1>

          <ul className={projectList}>
            {projects.map((project, i) => (
              <li className={section} key={i}>
                <h2>{project.name}</h2>

                <p className={description}>
                  {project.description}
                </p>

                <p>
                  <a href={project.url}>
                    {project.url.includes('github')
                      ? 'View on github'
                      : 'View website'}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </main>
      </Layout>
    );
  }
}

export default ProjectsPage;
