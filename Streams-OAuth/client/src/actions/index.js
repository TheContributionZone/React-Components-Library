import { SIGN_IN, SIGN_OUT } from './types';

// 📂 Sign in ACTION_CREATOR
// J receive that userID as an argument and 
// J add it to my ACTION on the payload property
// GOTO ./reducers/authReducer.js

export const signIn = () => {
  return {
    type: SIGN_IN
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
