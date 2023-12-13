import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowMoviesPlaying: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },

    addTopratedMovies: (state, action) => {
      state.topratedMovies = action.payload;
    },

    addUpComingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
  },

    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowMoviesPlaying,
  addTrailerVideo,
  addPopularMovies,
  addTopratedMovies,
  addUpComingMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
