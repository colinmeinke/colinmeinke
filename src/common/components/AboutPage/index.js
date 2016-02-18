import React, { Component } from 'react';

import Layout from '../Layout';

import { container, title, section } from './styles.css';

class AboutPage extends Component {
  render () {
    return (
      <Layout title="About">
        <section className={ container }>
          <h2 className={ title }>About</h2>

          <section className={ section }>
            <p>
              Two years ago I left my job in London as a Senior
              Front-end Developer at irokotv (Africa's Netflix).
              I sold everything I owned and set off to see the
              world.
            </p>

            <p>
              Now I work from Airbnbs in mega-cities and
              co-working spaces overlooking paddy fields.
            </p>
          </section>

          <section className={ section }>
            <p>
              I have over 10 years of experience building
              full-stack websites, both working full-time
              within start-ups, and freelance for
              non-profits.
            </p>

            <p>
              I am a generalist and pride myself on being a mix
              of both creative and technical. I love being able
              to take a project from start to finish.
            </p>

            <p>
              I enjoy designing experiences as much as I do
              architecting maintainable code.
            </p>

            <p>
              Design is about context. Who's using your website?
              Where are they? What are they doing? Design isn't
              just about a user's digital journey from A to B,
              but about a person's ongoing experience with your
              product in real, imperfect and changing environments.
            </p>

            <p>
              I want the experiences I create to work well for
              everyone, wherever they are, regardless of their
              device or connection.
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
      </Layout>
    );
  }
}

export default AboutPage;
