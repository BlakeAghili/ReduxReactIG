import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux/src';
import posts from './posts';
import comments from './comments';


const rootReducer = combineReducers({posts: posts, comments: comments, router: routerReducer});

export default rootReducer;
