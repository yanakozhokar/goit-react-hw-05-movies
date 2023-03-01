import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { GoBackButton } from 'components/GoBackButton/GoBackButton';
import { getFullInfo } from 'services/api';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [title, setTitle] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [poster, setPoster] = useState('');
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    const result = async movieId => {
      const description = await getFullInfo(movieId);
      const { poster_path, original_title, vote_average, overview, genres } =
        description;
      setPoster('https://image.tmdb.org/t/p/w500/' + poster_path);
      setTitle(original_title);
      setUserScore(Math.round((Number(vote_average) * 100) / 10));
      setOverview(overview);
      setGenres(genres.map(el => el.name).join(' '));
    };
    result(movieId);
  }, [movieId]);

  return (
    <>
      <GoBackButton />
      <div className={css.main}>
        <div className={css.posterContainer}>
          <img className={css.poster} src={poster} alt={title} />
        </div>
        <div className={css.description}>
          <h2 className={css.title}>{title}</h2>
          <p className={css.primaryText}>User Score: {userScore}%</p>
          <h3 className={css.subtitle}>Overview</h3>
          <p className={css.primaryText}>{overview}</p>
          <h3 className={css.subtitle}>Genres</h3>
          <p className={css.primaryText}>{genres}</p>
        </div>
      </div>
      <div className={css.additional}>
        <p>Additional information</p>
        <ul className={css.additionalList}>
          <li>
            <Link state={location.state} to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link state={location.state} to="review">
              Review
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
