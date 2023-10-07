import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profilesList: [],
  selectedProfile: null
};

export const profilesSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {
    setSelectedProfile: (state, action) => {
      state.selectedProfile = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setSelectedProfile } = profilesSlice.actions;

export default profilesSlice.reducer;
