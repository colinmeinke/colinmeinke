import DocumentTitle from 'react-document-title';
import React from 'react';
import { Link } from 'universal-redux-router';

import baseStyles from './base.css';

import Header from '../Header';

const testimonials = [
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

        <section className={ baseStyles.section }>
          <h3 className={ baseStyles.subTitle }>
            Testimonials
          </h3>

          <p>
            Here are some nice things people have to say about me:
          </p>

          { testimonials.map(( testimonial, i ) => (
            <blockquote
              className={ baseStyles.testimonial }
              key={ i }
            >
              <p className={ baseStyles.quote }>
                { testimonial.quote }
              </p>
              <footer>
                <cite className={ baseStyles.cite }>
                  <strong>{ testimonial.name }</strong> – { ' ' }
                  { testimonial.role } at { testimonial.company }
                </cite>
              </footer>
            </blockquote>
          ))}
        </section>
      </section>
    </section>
  </DocumentTitle>
);

export default WorkWithMe;
