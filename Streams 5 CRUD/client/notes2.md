

<img src="./images/CRUD.png" width="70%" />


# CRUD:
<img src="./images/CRUDOBJECTbasedAPPROACH.png" width="70%" />




## ./actions/index.js

```
import streams from '../apis/streams'; 
import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, DELETE_STREAM, EDIT_STREAM } from './types';

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
  const response = await streams.post('/streams', formValues);
  
  dispatch ({ type: CREATE_STREAM, payload: response.data});
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');

  dispatch({ type: FETCH_STREAMS, payload: response.data })
};

export const fetchStream = (id) => async dispatch => {
  // J USING 2015 TEMPLATE STRING LITERALAS for route
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data })
};

// J anytime we edit data we need to provide both the id and the update as arguments to the ACTION_CREATOR
// J So we combine the idea of receiving the id as an argument from fetchStream, while we are passing in formValues in createStream as well
export const editStream = (id, formValues) => async dispatch => {
  // J USING 2015 TEMPLATE STRING LITERALS for route
  const response = await streams.put(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data })
};

export const deleteStream = (id) => async dispatch => {
  // J USING 2015 TEMPLATE STRING LITERALS for route
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id })
};

```