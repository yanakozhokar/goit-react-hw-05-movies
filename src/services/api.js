const BASE_URL = 'http://api.themoviedb.org/3';
const KEY = '6e66186e83ecfb22dd565ba7420dfbd3';
const LANGUAGE = 'en-US';

export const getTrendingMovies = () => {
  return fetch(
    `${BASE_URL}/trending/all/day?api_key=${KEY}`.then(data => data.json())
  );
};

export const getMovie = query => {
  return fetch(
    `${BASE_URL}/search/movie/?api_key=${KEY}&query=${query}&language=${LANGUAGE}&page=1`.then(
      data => data.json()
    )
  );
};

export const getFullInfo = id => {
  return fetch(
    `${BASE_URL}/movie/${id}?api_key=${KEY}&language=${LANGUAGE}`
  ).then(data => data.json);
};

export const getCast = id => {
  return fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${KEY}&language=${LANGUAGE}`
  ).then(data => data.json());
};

export const getReviews = id => {
  return fetch(
    `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}&language=${LANGUAGE}&page=1`
  ).then(data => data.json());
};
