import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../api/tmdbApi';
import styles from './MovieReviews.module.css';

function MovieReviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getMovieReviews(movieId).then(setReviews);
    }, [movieId]);

    return (
        <div className={styles.container}>
            <h3>Reviews</h3>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map(review => (
                        <li key={review.id}>
                            <p><strong>{review.author}</strong>: {review.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>We don't have any reviews for this movie.</p>
            )}
        </div>
    );
}

export default MovieReviews;
