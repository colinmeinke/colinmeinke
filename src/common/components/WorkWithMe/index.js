import DocumentTitle from 'react-document-title';
import React from 'react';

import Header from '../Header';

import baseStyles from './base.css';

const WorkWithMe = () => (
  <DocumentTitle title="Work with me">
    <section>
      <Header />

      <section className={ baseStyles.containter }>
        <h2 className={ baseStyles.title }>Work with me</h2>

        <section className={ baseStyles.section }>
          <p>
            I have over 10 years of experience building
            full-stack websites, both working full-time within
            start-ups, and freelance for non-profits.
          </p>

          <p>
            <a
              className={ baseStyles.link }
              href="https://uk.linkedin.com/in/colinmeinke"
            >
              Take a look at my work experience.
            </a>
          </p>
        </section>

        <section className={ baseStyles.section }>
          <h2>What I do</h2>

          <ul className={ baseStyles.list }>
            <li>
              <h3>Development</h3>
              <p>
                Javascript moves at the speed of light, and
                I love learning, so it's a great match for
                me. My current stack includes React, Redux,
                NodeJS, Express, Babel, CSS modules, PostCSS
                and Webpack.
              </p>
              <p>
                I pride myself on being that rare mix of
                both creative and technical. I love styling
                just as much as I do architecting
                maintainable code.
              </p>
            </li>

            <li>
              <h3>Experience design</h3>
              <p>
                I believe design is about context. Who's
                using your website? Where are they? What
                are they doing? Design isn't just about
                a <em>user's </em> journey from A to B
                through your website, but about a <em>
                person's</em> ongoing experience with your
                product in real, imperfect and changing
                environments.
              </p>
            </li>

            <li>
              <h3>Everywhere</h3>
              <p>
                I want the experiences I create to work
                well for everyone, wherever they are,
                regardless of their device or connection.
                Progressive enhancement, accessibility,
                responsive web design and performance are
                all key parts of this philosophy.
              </p>
            </li>
          </ul>
        </section>

        <section className={ baseStyles.section }>
          <p>I'm taking on new projects in 2016.</p>

          <p>
            If you need somebody to take your project from
            start to finish, or anywhere in between, I've got
            you covered.
          </p>

          <p>
            <strong>
              Drop me an email to discuss your project and
              get things rolling.
            </strong>
          </p>

          <p>
            <a
              className={ baseStyles.link }
              href="mailto:hello@colinmeinke.com"
            >
              hello@colinmeinke.com
            </a>
          </p>
        </section>
      </section>
    </section>
  </DocumentTitle>
);

export default WorkWithMe;
