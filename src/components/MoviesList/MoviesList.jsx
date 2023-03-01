import css from './MoviesList.module.css';
const { Link, useLocation } = require('react-router-dom');

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.moviesList}>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
