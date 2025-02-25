import { createSlice } from "@reduxjs/toolkit";

const StateSlice = createSlice({
  name: "active",
  initialState: {
    active: true,
    tagsActive: 0,
  },
  reducers: {
    setactive: (state) => {
      state.active = !state.active;
    },
    setTagsActive: (state, action) => {
      state.tagsActive = action.payload.index;
    }
  },
});

export const StateSliceAction = StateSlice.actions;
export default StateSlice.reducer;
