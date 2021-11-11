import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

// // J dummy reducers
// export default combineReducers({
//   replaceMe: () => 'hi there'
// });

// 


export default combineReducers({
  postsReducer: postsReducer
});