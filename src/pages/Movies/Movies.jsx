import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'services/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const savedSearchParams = searchParams.get('query');
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!savedSearchParams) {
      return;
    }
    const getMoviedByQuery = async () => {
      const result = await getMovies(savedSearchParams);
      setMovies(result);
    };
    getMoviedByQuery();
  }, [savedSearchParams]);

  const onInputChange = event => {
    setQuery(event.currentTarget.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    setSearchParams({ query });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={onInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
