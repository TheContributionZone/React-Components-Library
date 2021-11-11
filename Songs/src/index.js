import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  // TODO Create an instance of the provider and wrap our App Component in it
  // TODO pass Provider a single prop: Store
  // TODO store is result of calling createStore and passing in our reducers
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
 
// TODO Provider is a component made by the React-Redux library: Makes the Redux store available to the connect() calls in the component hierarchy below.



// TODO createStore Creates a Redux store that holds the state tree. The only way to change the data in the store is to call dispatch() on it.

