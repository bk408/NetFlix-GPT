import { useDispatch } from "react-redux";
import { API_OPTIONS, TOPRATED_API } from "../utils/constant"
import { addTopratedMovies } from "../utils/movieSlice";
import { useEffect } from "react";



const useTopRatedMovies = () => {
    
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const data = await fetch(TOPRATED_API, API_OPTIONS);
        const json = await data.json();

        dispatch(addTopratedMovies(json.results));
    }

    useEffect(() => {
        getTopRatedMovies()
    },[])
}

export default useTopRatedMovies;