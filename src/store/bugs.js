import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import moment from "moment";
import { apiCallBegan } from "./api";

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
    // below is the action handler for the action "bugsReqestFailed":
    bugsRequestFailed: (state, action) => {
      state.loading = false;
      // action.payload is the error
      state.error = action.payload;
    },
    // below is the action handler for the action "bugsReqested":
    bugsRequested: (state, action) => {
      state.loading = true;
    },
    // below is the action handler for the action "bugsReceived":
    bugsReceived: (state, action) => {
      state.list = action.payload;
      state.loading = false;
      state.lastFetch = Date.now();
    },
    // state param below is the current bug slice state
    // bug slice state is an object with three properties: list, loading, lastFetch
    // below is the action handler for the action "bugAssignedToUser":
    bugAssignedToUser: (state, action) => {
      const { bugId, userId } = action.payload;
      const index = state.list.findIndex((bug) => bug.id === bugId);
      state.list[index] == undefined
        ? null
        : (state.list[index].userId = userId);
    },
    // below is the action handler for the action "bugAdded":
    bugAdded: (state, action) => {
      state.list.push(action.payload);
    },
    // below is the action handler for the action "bugResolved":
    bugResolved: (state, action) => {
      const index = state.list.findIndex((bug) => bug.id === action.payload);
      state.list[index].resolved = true;
    },
    // below is the action handler for the action "bugRemoved":
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
  bugsRequested,
  bugsRequestFailed,
} = slice.actions;

export default slice.reducer;

//! Action Creators
const url = "/bugs";
//! Below is a loadBugs action creator which is calling the apiCallBegan action creator
export const loadBugs = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.bugs;
  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;
  //! apiCallBegan is an action creator which returns the action object
  //! In order to start our workflow we need to explicitly dispatch the action
  console.log("This is the lastFetch constant: ", lastFetch);

  dispatch(
    apiCallBegan(
      //! Below is our Payload Object
      {
        url,
        // each one of these are actions that dispatch from our middleware
        onStart: bugsRequested.type,
        onSuccess: bugsReceived.type,
        onError: bugsRequestFailed.type,
      }
    )
  );
};

//! Below is a new Action Creator for calling the API
export const addBug = (bug) =>
  apiCallBegan({
    url,
    method: "post",
    data: bug,
    onSuccess: bugAdded.type,
  });

//! Below are the Selectors
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
