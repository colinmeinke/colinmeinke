const createUrlFromTags = ( tags = []) => {
  return `/${ tags.length ? '?tags=' + tags.join( '+' ) : '' }`;
};

const getTagsFromUrl = ( url = '' ) => {
  const matches = url.match( /tags=[^&]*/ );
  return matches ? matches[ 0 ].substr( 5 ).split( /[ \+%20]+/ ) : [];
};

export { createUrlFromTags, getTagsFromUrl };
