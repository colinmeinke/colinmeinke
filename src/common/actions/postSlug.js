const UPDATE_POST_SLUG = 'UPDATE_POST_SLUG';

const updatePostSlug = ( postSlug = '' ) => ({ postSlug, type: UPDATE_POST_SLUG });

export { UPDATE_POST_SLUG, updatePostSlug };
