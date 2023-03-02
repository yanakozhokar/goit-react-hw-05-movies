import axios from 'axios';

const moviesAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '6e66186e83ecfb22dd565ba7420dfbd3',
    language: 'en-US',
    page: 1,
  },
});

export const getTrendingMovies = async () => {
  const { data } = await moviesAPI.get('/trending/movie/day');
  return data.results;
};

export const getMovies = async query => {
  const { data } = await moviesAPI.get('/search/movie', { params: { query } });
  return data.results;
};

export const getFullInfo = async id => {
  const { data } = await moviesAPI.get(`/movie/${id}`);
  return data;
};

export const getCast = async id => {
  const { data } = await moviesAPI.get(`/movie/${id}/credits`);
  return data.cast;
};

export const getReviews = async id => {
  const { data } = await moviesAPI.get(`/movie/${id}/reviews`);
  return data.results;
};
