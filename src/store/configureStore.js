// import { createStore, applyMiddleware } from "redux";
import { applyMiddleware } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import {
  composeWithDevTools,
  devToolsEnhancer,
} from "redux-devtools-extension";
import logger from "redux-logger";
import reducer from "./bugs";

//! New way to create store with Toolkit
export default function () {
  return configureStore({ reducer });
}

//! The older way to create store with debuggers fully integrated !!
// export default function() {
//   const composeEnhancers = composeWithDevTools({
//     trace: true,
//   });

//   const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)));
//   return store;
// }

//!  old:
// const store = createStore(
//   reducer,
//   devToolsEnhancer({ trace: true })
// );

// export default store;
