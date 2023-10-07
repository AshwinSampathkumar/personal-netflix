import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviesList: []
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMoviesList: (state, action) => {
      state.moviesList = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setMoviesList } = moviesSlice.actions;

export default moviesSlice.reducer;
