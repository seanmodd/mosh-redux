import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  // below is the initial state for the bug slice
  initialState: {
    list: [],
    // loading is useful for displaying a loading spinner
    loading: false,
    // lastFetch is useful for caching
    lastFetch: null,
  },
  reducers: {
    // this is an object that maps actions => action handlers
    bugsReceived: (state, action) => {
      state.list = action.payload;
      state.loading = false;
      state.lastFetch = Date.now();
    },
    // state param below is the current bug slice state
    // bug slice state is an object with three properties: list, loading, lastFetch
    bugAssignedToUser: (state, action) => {
      const { bugId, userId } = action.payload;
      const index = state.list.findIndex((bug) => bug.id === bugId);
      state.list[index] == undefined
        ? null
        : (state.list[index].userId = userId);
    },
    bugAdded: (state, action) => {
      state.list.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (state, action) => {
      const index = state.list.findIndex((bug) => bug.id === action.payload);
      state.list[index].resolved = true;
    },
    bugRemoved: (state, action) => {
      const index = state.findIndex((bug) => bug.id === action.payload.id);
      state.splice(index, 1);
    },
  },
});
console.log("These are the slices: ", slice);

//! Below is actions.js
//* These are the reducers which are also action creators
export const {
  bugAdded,
  bugResolved,
  bugRemoved,
  bugAssignedToUser,
  bugsReceived,
} = slice.actions;

export default slice.reducer;

//! Action Creators
const url = "/bugs";
export const loadBugs = () =>
  apiCallBegan(
    //! Below is our Payload Object
    {
      url,
      // onSuccess: bugsReceived.type,
      onSuccess: "bugs/bugsReceived",
      // onSuccess: slice.actions.bugsReceived.type,
      // onSuccess: actions.apiCallSuccess.type,
      // onError: actions.apiCallFailed.type,
    }
  );

//! Below we use Memoization to create a selector function that will only be called if the unresolved bugs have changed
export const unresolvedBugsSelector = createSelector(
  (state) => state.entities.bugs,
  (state) => state.entities.projects,
  (bugs, projects) => bugs.filter((bug) => !bug.resolved)
);

//! Below we will create a Selector to get bugs by user
export const bugsByUserSelector = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );
