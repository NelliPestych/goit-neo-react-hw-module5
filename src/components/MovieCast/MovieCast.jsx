import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../api/tmdbApi';
import styles from './MovieCast.module.css';

function MovieCast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const DEFAULT_ACTOR_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

    useEffect(() => {
        getMovieCast(movieId).then(setCast);
    }, [movieId]);

    return (
        <div className={styles.container}>
            <h3>Cast</h3>
            <ul className={styles.castList}>
                {cast.map(actor => (
                    <li key={actor.id} className={styles.castItem}>
                        <img
                            src={actor.profile_path
                                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                                : DEFAULT_ACTOR_IMAGE}
                            alt={actor.name}
                        />
                        <p>{actor.name}</p>
                        <p>Character: {actor.character}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MovieCast;
