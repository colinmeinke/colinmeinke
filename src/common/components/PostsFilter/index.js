import React, { PropTypes } from 'react';

import { filters } from '../../config/posts';

import Nav from '../Nav';

const createActiveString = arr => [ ...arr ].sort().join( '+' );

const items = filters.map(({ name, tags }) => ({
  activeString: createActiveString( tags ),
  name,
  to: [ '/', { tags }],
}));

const linkProps = {
  shouldScrollToTop: false,
};

const propTypes = {
  tags: PropTypes.array,
};

const PostsFilter = ({ tags }) => (
  <section>
    <Nav
      activeString={ createActiveString( tags )}
      items={ items }
      linkProps={ linkProps }
    />
  </section>
);

PostsFilter.propTypes = propTypes;

export default PostsFilter;
