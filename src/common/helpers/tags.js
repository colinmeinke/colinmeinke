const createUrlFromTags = ( tags = []) => {
  return `/${ tags.length ? '?tags=' + tags.join( '+' ) : '' }`;
};

const getTagsFromUrl = ( url = '' ) => {
  const matches = url.match( /tags=[^&]*/ );
  return matches ? matches[ 0 ].substr( 5 ).split( /[ \+%20]+/ ) : [];
};

const tagMatch = ( tags = [], postTags = []) => {
  for ( const tag of tags ) {
    if ( postTags.indexOf( tag ) !== -1 ) {
      return true;
    }
  }

  return false;
};

export { createUrlFromTags, getTagsFromUrl, tagMatch };
