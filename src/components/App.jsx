import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';

// import {
//   getTrendingMovies,
//   getMovie,
//   getFullInfo,
//   getCast,
//   getReviews,
// } from '../services/api';

export const App = () => {
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />}></Route>
      <Route path="movies" element={<Movies />}></Route>
    </Route>
  </Routes>;
};
