const UPDATE_PAGE = 'UPDATE_PAGE';

const updatePage = ( page = 1 ) => ({
  page: parseInt( page, 10 ),
  type: UPDATE_PAGE,
});

export { UPDATE_PAGE, updatePage };
