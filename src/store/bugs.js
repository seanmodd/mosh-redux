// ? Below is the Redux Duck Pattern for creating the reducer,
// ? And actions for the reducer which is used to update the store.

//! Below is actionTypes.js
const BUG_ADDED = "bugAdded";
const BUG_REMOVED = "bugRemoved";
const BUG_RESOLVED = "bugResolved";

//! Below is actions.js
//* These are the action creators
export const bugAdded = (description) => ({
  type: BUG_ADDED,
  payload: {
    // description: "Bug1 is added this is the detailed description",
    description,
  },
});

export const bugResolved = (id) => ({
  type: BUG_RESOLVED,
  payload: {
    id,
  },
});

//! Below is reducer.js

let lastId = 0;
//* This is the reducer function

export default function reducer(state = [], action) {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case BUG_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
}
