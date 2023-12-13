import { useEffect } from "react";
import { API_OPTIONS, UPCOMING_API } from "../utils/constant"
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";


const useUpcomingMovies = () => {

    const dispatch = useDispatch()

    const getUpcomingMovies = async () => {
        const data = await fetch(UPCOMING_API, API_OPTIONS);
        const json = await data.json();

 
        dispatch(addUpComingMovies(json.results));
    }

    useEffect(() => {
        getUpcomingMovies()
    }, [])
}


export default useUpcomingMovies;