import { combineReducers } from 'redux';
import blogReducer from './blog/reducer';

const rootReducer = combineReducers({
    blog: blogReducer,
});

export default rootReducer;
