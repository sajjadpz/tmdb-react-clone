// A reducer for movies

import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";

import axios from "axios";
import * as Constants from "../../common/Constants";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (uri) => {
    const response = await axios.get(Constants.TMDB_API_BASE + uri, {
      params: { api_key: `${process.env.REACT_APP_TMDB_API_KEY}` },
    });
    return response.data.results;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchMovies.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.movies = action.payload;
    },
    [fetchMovies.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default moviesSlice.reducer;

export const selectAllMovies = (state) => state.movies.movies;

export const selectMovieById = createSelector(
  [selectAllMovies, (state, movieId) => movieId],
  (movies, movieId) => movies.filter((movie) => movie.id === movieId)
);
