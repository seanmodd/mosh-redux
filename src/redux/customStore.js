function createStore() {
  // below state variable will declare the internal state of the store
  let state;
  // below we create getState function that will return the state of the store so we don't directly access the state variable
  function getState() {
    return state;
  }
  // below we return getState function which is called a method of customStore in JS
  return {
    getState,
  };
}
export default createStore();
