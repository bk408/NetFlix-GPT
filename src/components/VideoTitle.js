import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
      <div className='pt-36 px-12'>
          <h1 className='font-bold text-xl'>{title}</h1>
          <p className='text-lg py-6 w-1/3'>{overview}</p>
          <div>
              <button className='rounded-lg bg-slate-300 p-4 px-4 text-lg' >▶Play</button>
              <button className='rounded-lg bg-slate-300 p-4 text-lg mx-2' >ℹMore Info</button>
          </div>
    </div>
  )
}

export default VideoTitle