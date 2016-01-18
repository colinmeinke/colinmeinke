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

        <p>I'm taking on new projects in 2016.</p>

        <p>Drop me an email:</p>

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
  </DocumentTitle>
);

export default WorkWithMe;
