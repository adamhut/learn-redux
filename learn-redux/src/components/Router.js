import React from 'react';
import { BrowserRouter,Route,Switch, Link} from 'react-router-dom'
import Main from './Main'
import Single from './Single'
import NotFound from './NotFound'

const Router = ()=>{

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}></Route>
                <Route exact path="/view/:postId" component={Single}></Route>

                <Route component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    );

}

export default Router;