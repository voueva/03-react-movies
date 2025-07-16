import type { Movie } from "../types/movie";
import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const BEARER_TOKEN = import.meta.env.BEARER_TOKEN;

export const fetchMovies = async (query: string): Promise<Array<Movie> | undefined> => {
    try {
      const response = await axios.get(`${API_URL}/search/movie`, {
        params: { query },
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          accept: 'application/json'
        }
      });

      return response.data.results;
    } catch (error) {
      console.error('Error fetching data from TMDb:', error);
    }
};
