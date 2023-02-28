import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../services/api';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const result = await getTrendingMovies();
      setTrendingMovies(result);
    };
    getMovies();
  }, []);

  return <MoviesList movies={trendingMovies} />;
};
