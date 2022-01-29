import reducer from "../reducer";

// * Remember, the createStore we import from Redux always expects a reducer function

function createStore(reducer) {
  // below state variable will declare the internal state of the store
  let state;
  // below is the internal state of the store
  const listeners = [];

  // below we create a subscribe method that takes a listener function as an argument
  function subscribe(listener) {
    // below we create a function that will be called whenever the state changes
    listeners.push(listener);
  }

  // below we create getState method so we don't directly access the state variable
  function dispatch(action) {
    // First we must call the reducer to get the new state
    state = reducer(state, action);
    // Second we must notify the subscribers that the state has changed
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  // below we create getState method so we don't directly access the state variable
  function getState() {
    return state;
  }
  return {
    dispatch,
    getState,
    subscribe,
  };
}
export default createStore(reducer);
