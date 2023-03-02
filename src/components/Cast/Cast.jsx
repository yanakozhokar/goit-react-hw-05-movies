import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/api';
import { nanoid } from 'nanoid';
import css from './Cast.module.css';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const result = async movieId => {
      const actors = await getCast(movieId);
      setCast(actors);
    };
    result(movieId);
  }, [movieId]);

  return (
    <ul className={css.actorsList}>
      {cast.map(({ character, name, profile_path }) => {
        return (
          <li key={nanoid()} className={css.actorsItem}>
            <div className={css.imgContainer}>
              {profile_path ? (
                <img
                  className={css.img}
                  src={'https://image.tmdb.org/t/p/w500/' + profile_path}
                  alt={name}
                />
              ) : (
                <div className={css.emptyImg}></div>
              )}
            </div>
            <p className={css.name}>Name: {name}</p>
            <p className={css.character}>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};
