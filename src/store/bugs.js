import { createAction, createReducer } from "@reduxjs/toolkit";

//! Below is actions.js
//* These are the action creators
export const bugAdded = createAction("bugAdded");
export const bugResolved = createAction("bugResolved");
export const bugRemoved = createAction("bugRemoved");
//! Below is reducer.js

let lastId = 0;
//* This is the reducer function
export default function () {
  createReducer([], {
    // key: value
    // actions: functions (event => event handler)
    bugAdded: (state, action) => {
      state.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (state, action) => {
      const index = state.findIndex((bug) => bug.id === action.payload.id);
      state[index].resolved = true;
    },
    bugRemoved: (state, action) => {
      const index = state.findIndex((bug) => bug.id === action.payload.id);
      state.splice(index, 1);
    },
  });
}
