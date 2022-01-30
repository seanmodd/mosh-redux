import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    userAdded: (state, action) => {
      state.push({
        id: ++lastId,
        name: action.payload.name,
        description: action.payload.description,
      });
    },
  },
});

export const { userAdded } = slice.actions;

export default slice.reducer;
