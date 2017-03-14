/* globals __DEVELOPMENT__ */

import { applyMiddleware, compose, createStore } from 'redux';
import {
  getState,
  routerMiddleware,
  routerReducer
} from 'universal-redux-router';

import * as reducers from '../reducers';
import routes from '../config/routes';
import { updateRootUrl } from '../actions';

const configureStore = ({ isServer = false, location } = {}) => {
  const { host, protocol, url } = location;
  const middleware = applyMiddleware(routerMiddleware(routes, { isServer }));
  const reducer = routerReducer(reducers);

  const enhancer = __DEVELOPMENT__
    ? compose(
        middleware,
        require('../components/DevTools').default.instrument()
      )
    : middleware;

  return new Promise((resolve, reject) => {
    const initialState = reducer({}, updateRootUrl(protocol, host));

    getState(url, routes, reducer, initialState)
      .then(state => {
        const store = createStore(reducer, state, enhancer);

        if (__DEVELOPMENT__ && module.hot) {
          module.hot.accept('../reducers', () => {
            const nextEnhancer = routerReducer(require('../reducers/index'));
            store.replaceReducer(nextEnhancer);
          });
        }

        resolve(store);
      })
      .catch(reject);
  });
};

export default configureStore;
