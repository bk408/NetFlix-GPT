import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    // // If i use w-screen aspect-video then I am unable to play the video
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="text-lg py-6 w-1/3">{overview}</p>
      <div>
        <button className="rounded-lg bg-white p-4 px-12 bg-opacity-85 text-lg text-black hover:bg-opacity-60">
          ▶Play
        </button>
        <button className="rounded-lg bg-gray-500 p-4 px-12 bg-opacity-80 text-lg mx-2 text-white hover:bg-opacity-50">
          ℹMore Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle