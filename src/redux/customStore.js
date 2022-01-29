import reducer from "./reducer";

// * Remember, the createStore we import from Redux always expects a reducer function

function createStore(reducer) {
  // below state variable will declare the internal state of the store
  let state;

  // below we create getState method so we don't directly access the state variable
  function dispatch(action) {
    // First we must call the reducer to get the new state
    state = reducer(state, action);
    // Second we must notify the subscribers that the state has changed
  }

  // below we create getState method so we don't directly access the state variable
  function getState() {
    return state;
  }
  return {
    dispatch,
    getState,
  };
}
export default createStore(reducer);
