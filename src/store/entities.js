import { combineReducers } from "redux";
import bugsReducer from "./bugs";
import projectsReducer from "./projects";

// combine reducers below and export default below:

export default combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
});
