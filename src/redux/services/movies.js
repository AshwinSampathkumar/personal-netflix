import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../axios";
import requests from "../../constants/requests";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getMovieList: builder.mutation({
      query: (payload) => {
        return {
          url: requests.fetchMovies,
          params: payload
        };
      }
    }),
    getShowsList: builder.query({
      query: (payload) => {
        return {
          url: requests.fetchTVShows,
          params: payload
        };
      }
    }),
    getPopularList: builder.query({
      query: (payload) => {
        return {
          url: requests.fetchPopularMovies,
          params: payload
        };
      }
    }),
    getTopRatedList: builder.query({
      query: (payload) => {
        return {
          url: requests.fetchTopRatedMovies,
          params: payload
        };
      }
    }),
    getTrendingList: builder.query({
      query: (payload) => {
        return {
          url: requests.fetchTrending,
          params: payload
        };
      }
    })
  })
});

export const {
  useGetMovieListMutation,
  useGetShowsListQuery,
  useGetPopularListQuery,
  useGetTopRatedListQuery,
  useGetTrendingListQuery
} = moviesApi;
