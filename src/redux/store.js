import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/movies";
import profileSlice from "./slices/profile";
import { moviesApi } from "./services/movies";

export const store = configureStore({
  reducer: {
    moviesSlice,
    profileSlice,
    [moviesApi.reducerPath]: moviesApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware)
});
