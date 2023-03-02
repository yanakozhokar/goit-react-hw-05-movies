import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { lazy } from 'react';

const LazyHomePage = lazy(() => import('../pages/Home/Home'));
const LazyMoviesPage = lazy(() => import('../pages/Movies/Movies'));
const LazyMovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LazyHomePage />} />
        <Route path="movies/:movieId" element={<LazyMovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Reviews />} />
        </Route>
        <Route path="movies" element={<LazyMoviesPage />} />
      </Route>
    </Routes>
  );
};
