import DocumentTitle from 'react-document-title';
import React from 'react';

import Footer from '../Footer';
import Header from '../Header';

import baseStyles from './base.css';

const About = () => (
  <DocumentTitle title="About">
    <section>
      <Header />

      <section className={ baseStyles.container }>
        <h2 className={ baseStyles.title }>About</h2>

        <section className={ baseStyles.section }>
          <p>
            Two years ago I left my job in London as a Senior
            Front-end Developer at irokotv (Africa's Netflix).
            I sold everything I owned and set off to see the
            world.
          </p>

          <p>
            I now work from Airbnbs in mega-cities and
            co-working spaces overlooking paddy fields.
          </p>

          <p>
            I will use this space to share stories of what I'm
            making, where I've been and what my life is like
            working remotely.
          </p>
        </section>

        <section className={ baseStyles.section }>
          <p>
            I have over 10 years of experience building
            full-stack websites.
          </p>

          <p>
            I love being a generalist and love being able to
            take a project from start to finish.
          </p>

          <p>
            I enjoy both designing user experiences and
            back-end architecture. My specialism can be found
            somewhere between the two.
          </p>

          <p>I'm pretty obsessive about:</p>

          <ul>
            <li>Everything Javascript</li>
            <li>Progressive enhancement</li>
            <li>Responsive web design</li>
            <li>Performance</li>
            <li>Maintainability</li>
          </ul>

          <p>
            My current stack includes React, Redux, NodeJS,
            Express, Babel, CSS modules, PostCSS and Webpack.
          </p>

          <p>
            As you might guess from that list, I'm really into
            learning new things. Learning is a large part of
            why I love being a digital nomad – it gives me the
            time to learn new technologies, and the opportunity
            to experience different cultures.
          </p>

          <p>
            It's an amazing time to be a web developer!
          </p>
        </section>
      </section>

      <Footer />
    </section>
  </DocumentTitle>
);

export default About;
