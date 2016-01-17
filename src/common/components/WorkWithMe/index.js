import DocumentTitle from 'react-document-title';
import React from 'react';

import Header from '../Header';

const WorkWithMe = () => (
  <DocumentTitle title="Work with me">
    <section>
      <Header />

      <h2>Work with me</h2>

      <p>
        <a href="mailto:hello@colinmeinke.com">hello@colinmeinke.com</a>
      </p>
    </section>
  </DocumentTitle>
);

export default WorkWithMe;
