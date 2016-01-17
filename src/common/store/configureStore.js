import { combineReducers, createStore } from 'redux';
import { updateUrl, urlReducer } from 'universal-redux-router';

const reducer = combineReducers({ url: urlReducer });

const configureStore = ( initialState = {}, initialUrl = null ) => {
  if ( initialUrl ) {
    return configureStore({
      ...initialState,
      url: urlReducer( null, updateUrl( initialUrl )),
    });
  }

  if ( __DEVELOPMENT__ ) {
    const DevTools = require( '../components/DevTools' ).default;
    return DevTools.instrument()( createStore )( reducer, initialState );
  }

  return createStore( reducer, initialState );
};

export default configureStore;
