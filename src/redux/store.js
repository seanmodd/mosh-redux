import { createStore } from "redux";
import reducer from "./reducer";

let composeEnhancers = compose;
if (typeof window !== "undefined") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const store = createStore(reducer, composeEnhancers());

export default store;
