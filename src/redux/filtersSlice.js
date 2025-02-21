import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: ""
}
const slice = createSlice({
  name: "name",
  initialState,
  
  reducers: {
    changeFilter: (state, action) => {
      state.filters = action.payload
    },
  },
});

export const filterReducer = slice.reducer;
export const { changeFilter } = slice.actions;
