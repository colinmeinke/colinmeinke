const UPDATE_TAGS = 'UPDATE_TAGS';

const updateTags = (tags = []) => ({ tags, type: UPDATE_TAGS });

export { UPDATE_TAGS, updateTags };
