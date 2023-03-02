import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Appbar.module.css';

export const Appbar = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.navMenu}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="movies">Movies</NavLink>
        </nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
