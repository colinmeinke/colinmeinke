import DocumentTitle from 'react-document-title';
import React from 'react';
import { Link } from 'universal-redux-router';

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
            <Link
              className={ baseStyles.link }
              url="/about"
            >
              Read more about me
            </Link>
            { ' ' } or { ' ' }
            <a
              className={ baseStyles.link }
              href="https://uk.linkedin.com/in/colinmeinke"
            >
              take a look at my work experience
            </a>
            .
          </p>
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
