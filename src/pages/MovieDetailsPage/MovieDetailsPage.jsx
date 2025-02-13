import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../../api/tmdbApi';
import styles from './MovieDetailsPage.module.css';

function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getMovieDetails(movieId).then(setMovie);
    }, [movieId]);

    if (!movie) return <p>Loading...</p>;

    return (
        <div className={styles.container}>
            <button onClick={() => navigate(-1)}>Go back</button>
            <h2>{movie.title} ({movie.release_date?.split('-')[0]})</h2>
            <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
            <p><strong>Overview:</strong> {movie.overview}</p>
            <p><strong>Genres:</strong> {movie.genres?.map(g => g.name).join(', ')}</p>

            <h3>Additional information</h3>
            <ul>
                <li><Link to="cast">Cast</Link></li>
                <li><Link to="reviews">Reviews</Link></li>
            </ul>

            <Outlet />
        </div>
    );
}

export default MovieDetailsPage;
