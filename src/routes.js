import React from 'react';
import { Route, IndexRoute, Re } from 'react-router';

import App from './components/app';
import MainPage from './components/main_page';
import Register from './components/register';
import Login from './components/login';

export default (
    <Route path="/" component={App}>
        {/* {user ?
            <IndexRoute component={MainPage} /> : */}
            <div>
                <IndexRoute component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </div>
        {/* } */}
    </Route>
);
