import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useLatestMovies from "../hooks/useLatestMovies";

const Browse = () => {
  useNowPlayingMovies(); // custom hook
  usePopularMovies(); // Custom Hook
  useTopRatedMovies(); // Custom Hook
  useUpcomingMovies(); // Custom Hook 
  useLatestMovies(); // Custom Hook

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
