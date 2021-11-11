import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';


// J We have to pull that reducer (already made in redux-form)
// J out of the library and hook it up to our combineReducer call right here:
// J import it above and add property form:reducer
export default combineReducers({
  auth: authReducer,
  form: formReducer
});
 