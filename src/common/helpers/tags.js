const tagMatch = (tags = [], postTags = []) => {
  for (const tag of tags) {
    if (postTags.indexOf(tag) !== -1) {
      return true;
    }
  }

  return false;
};

export { tagMatch };
