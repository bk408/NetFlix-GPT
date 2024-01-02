import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";


const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config?.lang);

  
  return (
    <div className="pt-[9%] flex justify-center">
      <form className="bg-white bg-opacity-75 w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-full overflow-hidden">
        <div className="flex items-center border-b border-gray-600 py-2">
          <input
            type="text"
            placeholder={lang[langKey].gptSearchPlaceholder}
            className="p-4 w-full bg-transparent text-black outline-none placeholder-black"
          />
          <button className="py-2 px-8 mr-7 bg-red-700 text-white rounded-full hover:bg-red-600 transition duration-300">
            {lang[langKey].search}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;


