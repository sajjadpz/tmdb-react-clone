// A reducer for movies

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

export const fetchMovieById = createAsyncThunk(
  "movies/fetchMovieById",
  async (movieId) => {
    const response = await axios.get(
      Constants.TMDB_API_BASE + "/movie/" + movieId,
      {
        params: {
          api_key: `${process.env.REACT_APP_TMDB_API_KEY}`,
        },
      }
    );
    return [response.data];
  }
);

export const fetchMovieCreditsById = createAsyncThunk(
  "movies/fetchMovieCreditsById",
  async (movieId) => {
    const response = await axios.get(
      Constants.TMDB_API_BASE + "/movie/" + movieId + "/credits",
      {
        params: {
          api_key: `${process.env.REACT_APP_TMDB_API_KEY}`,
        },
      }
    );
    return response.data;
  }
);

export const fetchMovieKeywords = createAsyncThunk(
  "movies/fetchMovieKeywords",
  async (movieId) => {
    const response = await axios.get(
      Constants.TMDB_API_BASE + "/movie/" + movieId + "/keywords",
      {
        params: {
          api_key: `${process.env.REACT_APP_TMDB_API_KEY}`,
        },
      }
    );
    return response.data;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [], //todo: these should all be part of movie object
    movieCredits: [],
    keywordsList: [],
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
    [fetchMovieById.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchMovieById.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.movies = action.payload;
    },
    [fetchMovieById.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [fetchMovieCreditsById.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.movieCredits = action.payload;
    },
    [fetchMovieKeywords.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.keywordsList = action.payload;
    },
  },
});

export default moviesSlice.reducer;

export const selectAllMovies = (state) => state.movies.movies;

// const selectedMovie = (state, movieId) => movieId;

// export const selectMovieById = createSelector(
//   [selectAllMovies, selectedMovie],
//   (movies, movieId) => movies.find((movie) => movie.id == movieId)
// );

//  export const selectOneMovie = (state) => state.movies.movies;
