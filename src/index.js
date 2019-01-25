import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ReduxPromise from 'redux-promise';

import routes from './routes'
import reducers from './reducers';

import App from './components/app';
import MainPage from './components/main_page';
import Register from './components/register';
import Login from './components/login';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={MainPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'))
