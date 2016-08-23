import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import * as actionCreators from '../actions/counter';

/*
  // middleware example
  const middleware = store => next => action => {

    // 在dispatching期间做任何事情
    doSomething();

    // next 即dispatch函数
    const result = next(action);

    // 返回原来dipatch函数的执行结果
    return result;
  };
*/
const enchancer = compose(
  applyMiddleware(createLogger(), thunk),
  // redux devtools
  window.devToolsExtension ? 
    window.devToolsExtension({ actionCreators }) :
    f => f
);

function configureStore(initialState) {

  const store = createStore(rootReducer, initialState, enchancer);

  // 热替换reducer
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers').default);
    });
  }

  return store;
}

export default configureStore;
