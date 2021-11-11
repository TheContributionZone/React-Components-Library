import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  // J make sure that we put in our initial state
  userID: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // J Now finally inside our authReducer, we are going to make sure that when a user signs in right here, we not only update the isSignedIn property, but we are going to make sure that we also update userId flag as well
    // J After adding it above in INITIAL_STATE, we make sure that we update the userId property, and the new value for this property is going to come from action.payload.
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
      // J When the user signs out, we want to make sure that they do not carry the userId around, so clear that property:
      // J when user signs out, assign value back to null
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
