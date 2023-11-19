import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowMoviesPlaying: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});

export const { addNowMoviesPlaying } = movieSlice.actions;

export default movieSlice.reducer;
