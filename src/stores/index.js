const redux = require('redux');
const reducers = require('../reducers');

import createDebounce from 'redux-debounce';

const config = {
  simple: 300
};

const debouncer = createDebounce(config);

module.exports = function(initialState) {
  const store = redux.createStore(reducers, initialState, redux.applyMiddleware(debouncer))

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
