import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import MainPage from './components/main_page';
import Register from './components/register';
import Login from './components/login';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={MainPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
    </Route>
);