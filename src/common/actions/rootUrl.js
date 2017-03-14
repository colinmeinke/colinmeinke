const UPDATE_ROOT_URL = 'UPDATE_ROOT_URL';

const updateRootUrl = (protocol, host) => ({
  type: UPDATE_ROOT_URL,
  url: `${protocol}://${host}`
});

export { UPDATE_ROOT_URL, updateRootUrl };
