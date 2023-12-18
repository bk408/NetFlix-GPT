import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BACKGROUND_lOGO } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img
          src={BACKGROUND_lOGO}
          alt="background-logo"
        ></img>
        </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch 