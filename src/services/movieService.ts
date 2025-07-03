import axios, { type AxiosResponse } from "axios";
import type { Movie } from "../types/movie";

const API_URL = 'https://api.themoviedb.org/3/search/movie';
const myKey = import.meta.env.VITE_API_KEY;


export const fetchMovies = async (query: string) => {
    const response: AxiosResponse<{ results: Movie[] }> = await axios.get(API_URL, {
        params: { query },
        headers: {
            Authorization: `Bearer ${myKey}`,
        }
    });
    
    return response.data.results;
    
}