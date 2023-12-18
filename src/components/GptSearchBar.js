import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[9%] flex justify-center">
      <form className="bg-white bg-opacity-75 w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-full overflow-hidden">
        <div className="flex items-center border-b border-gray-600 py-2">
          <input
            type="text"
            placeholder="Search for movies, shows, and more..."
            className="p-4 w-full bg-transparent text-black outline-none placeholder-black"
          />
          <button className="py-2 px-8 mr-7 bg-red-700 text-white rounded-full hover:bg-red-600 transition duration-300">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
