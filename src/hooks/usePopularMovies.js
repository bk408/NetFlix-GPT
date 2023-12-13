import { useDispatch } from "react-redux";
import {  API_OPTIONS, POPULAR_API } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

// This is custom hook
const usePopularMovies = () => {
  
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_API, API_OPTIONS);
    const json = await data.json();

    dispatch(addPopularMovies(json.results)); // dispatch the action
  };

  // We will call this API in useEffect because I want to call this API once

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
