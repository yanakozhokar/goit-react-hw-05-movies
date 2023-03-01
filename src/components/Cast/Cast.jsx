import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/api';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const result = async movieId => {
      const actors = await getCast(movieId);
      setCast(actors);
    };
    result(movieId);
  }, []);

  return (
    <ul>
      {cast.map(({ id, character, name, profile_path }) => {
        return (
          <li key={id}>
            <div className="imgContainer">
              {profile_path && (
                <img
                  src={'https://image.tmdb.org/t/p/w500/' + profile_path}
                  alt={name}
                />
              )}
            </div>
            <p>Name: {name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};
