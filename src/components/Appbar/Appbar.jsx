import { NavLink } from 'react-router-dom';

export const Appbar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="movies">Movies</NavLink>
      </nav>
    </header>
  );
};
