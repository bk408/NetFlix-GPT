import React from 'react'

const GptSearchBar = () => {
  return (
    <div className="pt-[9%] flex justify-center">
      <form className=" bg-black w-1/2  grid grid-cols-12">
        <input
          type="text"
          placeholder="What would you like to watch today?"
          className="p-4 m-1 col-span-10"
        />
        <button className="py-2 px-2 m-2 bg-red-700  text-white rounded-md col-span-2">
          Search
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar