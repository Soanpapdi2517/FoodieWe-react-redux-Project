import { createSlice } from "@reduxjs/toolkit";

const StateSlice = createSlice({
  name: "active",
  initialState: {
    active: true,
    tagsActive: "All",
    navbarActive: "Home",
  },
  reducers: {
    setactive: (state) => {
      state.active = !state.active;
    },
    setTagsActive: (state, action) => {
      state.tagsActive = action.payload.index;
    },
    setnavbarActive: (state, action) => {
      state.navbarActive = action.payload.menu;
    }
  },
});

export const StateSliceAction = StateSlice.actions;
export default StateSlice.reducer;
