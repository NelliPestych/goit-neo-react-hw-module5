import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';

const options = {
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
};

export const fetchTrendingMovies = async () => {
    const response = await axios.get(`${API_URL}/trending/movie/day`, options);
    return response.data.results;
};

export const searchMovies = async (query) => {
    const response = await axios.get(`${API_URL}/search/movie?query=${query}`, options);
    return response.data.results;
};

export const getMovieDetails = async (movieId) => {
    const response = await axios.get(`${API_URL}/movie/${movieId}`, options);
    return response.data;
};

export const getMovieCast = async (movieId) => {
    const response = await axios.get(`${API_URL}/movie/${movieId}/credits`, options);
    return response.data.cast;
};

export const getMovieReviews = async (movieId) => {
    const response = await axios.get(`${API_URL}/movie/${movieId}/reviews`, options);
    return response.data.results;
};
