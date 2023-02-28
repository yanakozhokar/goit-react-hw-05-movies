import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { GoBackButton } from 'components/GoBackButton/GoBackButton';
import { getFullInfo } from 'services/api';

export const MovieDetails = () => {
  const [title, setTitle] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    const getMovies = async movieId => {
      const result = await getFullInfo(movieId);
      const { original_title, vote_average, overview, genres } = result;
      setTitle(original_title);
      setUserScore(Math.round((Number(vote_average) * 100) / 10));
      setOverview(overview);
      setGenres(genres.join(' '));
    };
    getMovies(movieId);
  }, []);

  return (
    <>
      <GoBackButton />
      <h2>{title}</h2>
      <p>User Score: {userScore}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres}</p>
      <Link state={location.state} to="cast">
        Cast
      </Link>
      <Link state={location.state} to="review">
        Review
      </Link>
      <Outlet />
    </>
  );
};
