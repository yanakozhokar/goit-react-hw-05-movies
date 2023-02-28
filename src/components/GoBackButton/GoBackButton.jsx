import { Link, useLocation } from 'react-router-dom';

export const GoBackButton = () => {
  const location = useLocation();
  return <Link to={location.state?.from ?? '/'}>Go back</Link>;
};
