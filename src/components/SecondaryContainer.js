import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-52 relative z-20 pl-7">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topratedMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          {/*<MovieList title={"Latest Movies"} movies={movies.latestMovies} />*/}
        </div>
      </div>
    )
  );
}

export default SecondaryContainer