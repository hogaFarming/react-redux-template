import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
import Home from './components/Home';
import CounterPage from './containers/CounterPage';

const initialState = { count: 0 };
const store = configureStore(initialState);
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Home} />
      <Route path="/counter" component={CounterPage} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
