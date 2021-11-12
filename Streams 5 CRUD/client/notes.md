```
import streams from '../apis/streams'; 
import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
// J We are going to define an async ACTION_CREATOR. Anytime we make an async ACTION_CREATOR we ar making use of Redux-Thunk, so we want to return an arrow function from  the ACTION_CREATOR. and the first argument is going to be the dispatch function
export const createStream = formValues => async dispatch => {
    // J Then inside of here I'm going to sy streams.post and im going to make a request to the /streams endpoint at localhost:3001 and I'm going to try to put in all of my different formValues
  streams.post('/streams', formValues);
};
```