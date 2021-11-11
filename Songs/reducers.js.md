console.clear();

// people dropping off a form (ACTION CREATORS)
const createPolicy = (name, amount) => {
  return { // ACTION
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  }
};

const deletePolicy = (name, amount) => {
  return { // ACTION
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  }
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  }
};

// REDUCERS (Departments)
// NEVER MODIFY DATA INSIDE OF REDUCERS
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    // we CARE
    return [...oldListOfClaims, action.payload];
  }
  
  // dont CARE
  return oldListOfClaims;
};
  
const accounting = (bagOfMoney = 100, action) => {
    if (action.type === 'CREATE_CLAIM') {
      return (bagOfMoney - action.payload.amountOfMoneyToCollect);
    } else if (action.type === 'CREATE_POLICY') {
      return bagOfMoney + action.payload.amount;
    }
    
    return bagOfMoney;
};
  
const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !== action.payload.name)
  }
  
  return listOfPolicies;
};

const { createStore, combineReducers } = Redux;


const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);



const action = createPolicy('Alex', 20);
console.log(action);

store.dispatch(action);
console.log('store.getState()')
console.log(store.getState())


store.dispatch(createPolicy('Alex', 1000.987));
store.dispatch(createPolicy('Jim', 20));
store.dispatch(createPolicy('Jonathan', 300));

store.dispatch(createClaim('Alex',120));
store.dispatch(createClaim('Rob',4000));
console.log('store.getState()');
console.log(store.getState());

// NOTE a STORE IN REDUX IS ESSENTIALLY AN ASSEMBLY OF action creators and reducers
