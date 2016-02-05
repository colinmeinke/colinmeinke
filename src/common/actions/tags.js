const UPDATE_TAGS = 'UPDATE_TAGS';

const updateTags = ( tags = []) => ({ type: UPDATE_TAGS, tags });

export { UPDATE_TAGS, updateTags };
