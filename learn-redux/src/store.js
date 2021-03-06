import {createStore, compose} from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
// import { browserHistory  } from 'react-router-dom'
import { createBrowserHistory  } from 'history'

//import the root reducer
import rootReducer from './reducers/index'

import comments from './data/comments';
import posts from './data/posts';

//create an object for the default data

const defaultState = {
    posts :posts,
    comments:comments,
}

const enchancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer,defaultState,enchancers);

export const history = syncHistoryWithStore(createBrowserHistory(),store);

if(module.hot){
    module.hot.accept('./reducers/' ,()=>{
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;