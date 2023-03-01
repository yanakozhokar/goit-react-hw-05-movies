import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/api';
import css from './Reviews.module.css';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const result = async movieId => {
      const reviews = await getReviews(movieId);
      setReviews(reviews);
    };
    result(movieId);
  }, []);

  console.log(reviews);

  return (
    <ul className={css.reviewsList}>
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id} className={css.reviewsItem}>
            <h4 className={css.reviewsAuthor}>Author: {author}</h4>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};
