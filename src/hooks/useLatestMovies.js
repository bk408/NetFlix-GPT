import { useEffect } from "react";
import { API_OPTIONS, LATEST_API } from "../utils/constant"
import { useDispatch } from "react-redux";
import { addLatestMovies } from "../utils/movieSlice";


const useLatestMovies = () => {

    const dispatch = useDispatch()

    const getLatestMovies = async () => {
        const data = await fetch(LATEST_API, API_OPTIONS);
        const json = await data.json()


        dispatch(addLatestMovies(json.results));
    }

    useEffect(() => {
        getLatestMovies();
    }, [])
}

export default useLatestMovies;