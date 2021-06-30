import React from 'react';
import { BrowserRouter,Route,Switch, Link} from 'react-router-dom'
import Main from './Main'
import Single from './Single'
import NotFound from './NotFound'

import { Provider } from 'react-redux';
import store, {history} from './../store'

import App from './App'

const Router = ()=>{

    return (
        <Provider store={store} >
            <BrowserRouter history={history}>
                <Switch>
                    <Route exact path="/" component={App}></Route>
                    <Route exact path="/view/:postId" component={Single}></Route>

                    <Route component={NotFound}></Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    );

}

export default Router;