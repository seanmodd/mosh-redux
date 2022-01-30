import { createSlice } from "@reduxjs/toolkit";

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
