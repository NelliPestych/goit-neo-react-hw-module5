import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { fetchMovieDetails } from "../../services/api";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const backLinkRef = useRef(location.state?.from || "/movies");

    useEffect(() => {
        const getMovie = async () => {
            try {
                const data = await fetchMovieDetails(movieId);
                setMovie(data);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };
        getMovie();
    }, [movieId]);

    if (!movie) return <p>Loading...</p>;

    return (
        <div className={styles.container}>
            <Link to={backLinkRef.current} className={styles.backButton}>
                Go back
            </Link>
            <h2>{movie.title} ({movie.release_date?.slice(0, 4)})</h2>
            <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
            <p><strong>Overview:</strong> {movie.overview}</p>
            <p><strong>Genres:</strong> {movie.genres?.map(g => g.name).join(", ")}</p>

            <h3>Additional information</h3>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>

            <Outlet />
        </div>
    );
};

export default MovieDetailsPage;
