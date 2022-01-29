import { createStore, applyMiddleware } from "redux";
import {
  composeWithDevTools,
  devToolsEnhancer,
} from "redux-devtools-extension";
import logger from "redux-logger";
import reducer from "./bugs";

//! New and better way to create store with debuggers fully integrated
export default function configureStore() {
  const composeEnhancers = composeWithDevTools({
    trace: true,
  });

  const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)));
  return store;
}

//!  old:
// const store = createStore(
//   reducer,
//   devToolsEnhancer({ trace: true })
// );

// export default store;
