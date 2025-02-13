import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGUxNDU2NmE1YzVmNmE1YjlkNWM5NzNiZjYzOTQxOSIsIm5iZiI6MTU5NTY2NjIxMy43NjMsInN1YiI6IjVmMWJlZjI1NjZhN2MzMDAzNmZlMjg1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s1guK1Dz7amwtDouBGVjWHwjF4AX1seIN2oHOqfYNuE'; // Вставити свій токен доступу

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
