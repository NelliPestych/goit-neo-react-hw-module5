import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '14e14566a5c5f6a5b9d5c973bf639419';

const options = {
    headers: {
        Authorization: `Bearer ${API_KEY}`,
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
