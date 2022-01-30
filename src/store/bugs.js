import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    // this is an object that maps actions => action handlers
    bugAdded: (state, action) => {
      state.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (state, action) => {
      state.forEach((bug) => {
        if (bug.id === action.payload.id) {
          bug.resolved = true;
        }
      });
    },
    bugRemoved: (state, action) => {
      const index = state.findIndex((bug) => bug.id === action.payload.id);
      state.splice(index, 1);
    },
  },
});
console.log("These are the slices: ", slice);

//! Below is actions.js
//* These are the action creators
export const { bugAdded, bugResolved, bugRemoved } = slice.actions;

export default slice.reducer;

//! Below is the selector function that we will use to get the unresolved bugs
// export const unresolvedBugsSelector = (state) => {
//   return state.entities.bugs.filter((bug) => !bug.resolved);
// };

//! Below we use Memoization to create a selector function that will only be called if the unresolved bugs have changed
export const unresolvedBugsSelector = createSelector(
  (state) => state.entities.bugs,
  (state) => state.entities.projects,
  (bugs, projects) => bugs.filter((bug) => !bug.resolved)
);
