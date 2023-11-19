import React from 'react'
import { useSelector } from 'react-redux'

import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies); // Get the data from store

  if (!movies) return;  // If movies is not present or movies === null then return and it will not go ahead 

  const mainMovie = movies[0]
  console.log(mainMovie);

  const { original_title, overview } = mainMovie;  

    return <div>
        <VideoTitle title={original_title} overview={overview}  />
        <VideoBackground />
  </div>;
}

export default MainContainer