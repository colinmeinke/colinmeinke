import React, { PropTypes } from 'react';

import { createUrlFromTags, getTagsFromUrl } from '../../helpers';

import { updateTags } from '../../actions';

import { filters } from '../../config/posts';

import Nav from '../Nav';

const createActiveString = arr => [ ...arr ].sort().join( '+' );

const items = filters.map(({ name, tags }) => ({
  activeString: createActiveString( tags ),
  name,
  url: createUrlFromTags( tags ),
}));

const onClick = ( e, dispatch ) => {
  const tags = getTagsFromUrl( e.target.href );
  dispatch( updateTags( tags ));
};

const linkProps = {
  onClick,
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
