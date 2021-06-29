import {createStore, compose} from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { useHistory } from 'react-router-dom'


//import the root reducer
import rootReducer from './reducers/index'

import comments from './data/comments';
import posts from './data/posts';

//create an object for the default data

const defaultState = {
    posts :posts,
    comments:comments,
}

const store = createStore(rootReducer,defaultState);

export const history = syncHistoryWithStore(useHistory,store);

export default store;