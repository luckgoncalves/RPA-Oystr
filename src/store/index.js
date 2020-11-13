import { createStore } from 'redux'

const INITIAL_STATE = {
  path: ''
}

function Store(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ROUTE':
      return {...state, path: action.payload}  
    default:
      return state
  }
}

const store = createStore(Store);
export default store;

