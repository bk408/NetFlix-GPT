import React from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constant';
import { useEffect } from 'react';

const Browse = () => {

  const getmoviePlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json()
    console.log(json);
  }

  // We will call this API in useEffect because I want to call this API once

  useEffect(() => {
    getmoviePlaying()
  }, [])

  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse