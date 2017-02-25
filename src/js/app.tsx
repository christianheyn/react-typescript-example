import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Start from './components/Start';
import Items from './components/Items';
import Item from './components/Item';

ReactDOM.render(
    (
        <Router history={hashHistory}>
            <Route path="/" component={Start}>
                <Route path="/items" component={Items}/>
                <Route path="/items/:id" component={Item}/>
            </Route>
        </Router>
    ),
    document.getElementById('root')
);
