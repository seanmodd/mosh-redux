import { createStore, applyMiddleware } from "redux";
import {
  composeWithDevTools,
  devToolsEnhancer,
} from "redux-devtools-extension";
import logger from "redux-logger";
import reducer from "./reducer";

//! New and better way to create store with debuggers fully integrated
const composeEnhancers = composeWithDevTools({
  trace: true,
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)));

export default store;

//!  old:
// const store = createStore(
//   reducer,
//   devToolsEnhancer({ trace: true })
// );

// export default store;
