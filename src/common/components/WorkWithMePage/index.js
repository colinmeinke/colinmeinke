import React, { Component } from 'react';
import { Link } from 'universal-redux-router';

import CallToAction from '../CallToAction';
import Layout from '../Layout';

import {
  callToAction,
  cite,
  container,
  link,
  quote,
  section,
  subTitle,
  testimonial,
  title,
} from './styles.css';

const testimonials = [
  {
    company: 'irokotv',
    name: 'Matteo Cuellar',
    quote: `I have worked together with Colin on multiple
            projects for almost 3 years and it’s always been
            a great experience. Keeping up to date with
            current web technologies, he always found clever
            ways of realising and sometimes even enhancing
            the designs while maintaining app and front-end
            performance.`,
    role: 'Director of Product Design and UX',
  },
  {
    company: 'Gignite',
    name: 'Luke Morton',
    quote: `Working with Colin is great. He’s full of ideas for
            modern, client side heavy development. Can’t wait
            to work with him again.`,
    role: 'Lead Developer',
  },
  {
    company: 'Democratic Voice of Burma',
    name: 'Francis Wade',
    quote: `Colin spent several months building a strong, stylish
            and innovative website for DVB to map the 2010
            elections in Burma that cleverly utilised user
            interactivity during a period of tight media control
            in Burma. The website received widespread acclaim and
            was commended by various news outlets, including
            Reuters.`,
    role: 'Journalist',
  },
  {
    company: 'Visiting Arts',
    name: 'Andy Kyriakides',
    quote: `Working with Colin on the Visiting Arts website was
            a pleasure. His input was invaluable from
            conception to delivery and helped shape a
            technological paradigm shift for the whole
            organisation.`,
    role: 'Communications Manager',
  },
];

class WorkWithMePage extends Component {
  render () {
    return (
      <Layout
        showCallToAction={ false }
        title="Work with me"
      >
        <section className={ container }>
          <h1 className={ title }>Work with me</h1>

          <section className={ section }>
            <p>
              I have over 10 years of experience building
              full-stack websites, both working full-time within
              start-ups, and freelance for non-profits.
            </p>

            <p>
              <Link
                className={ link }
                to="/about"
              >
                Read more about me
              </Link>
              { ' ' } or { ' ' }
              <a
                className={ link }
                href="https://uk.linkedin.com/in/colinmeinke"
              >
                take a look at my work experience
              </a>
              .
            </p>
          </section>

          <CallToAction
            className={ callToAction }
            linkIsExternal
            linkText="hello@colinmeinke.com"
            linkTo="mailto:hello@colinmeinke.com"
            title="I'm taking on new projects in 2016."
          >
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
          </CallToAction>

          <section className={ section }>
            <h2 className={ subTitle }>
              Testimonials
            </h2>

            <p>
              Here are some nice things people have to say about me:
            </p>

            { testimonials.map(( t, i ) => (
              <blockquote
                className={ testimonial }
                key={ i }
              >
                <p className={ quote }>
                  { t.quote }
                </p>
                <footer>
                  <cite className={ cite }>
                    <strong>{ t.name }</strong> – { ' ' }
                    { t.role } at { t.company }
                  </cite>
                </footer>
              </blockquote>
            ))}
          </section>
        </section>
      </Layout>
    );
  }
}

export default WorkWithMePage;
