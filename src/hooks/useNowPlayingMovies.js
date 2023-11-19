import { useDispatch } from "react-redux";
import { API, API_OPTIONS } from "../utils/constant";
import { addNowMoviesPlaying } from "../utils/movieSlice";
import { useEffect } from "react";

// This is custom hook
const useNowPlayingMovies = () => {
  // Fetch date from TMDB API & update the store
  const dispatch = useDispatch();

  const getmoviePlaying = async () => {
    const data = await fetch(API, API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowMoviesPlaying(json.results)); // dispatch the action
  };

  // We will call this API in useEffect because I want to call this API once

  useEffect(() => {
    getmoviePlaying();
  }, []);
};

export default useNowPlayingMovies;
