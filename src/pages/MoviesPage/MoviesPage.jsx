import { useState } from 'react';
import { searchMovies } from '../../api/tmdbApi';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';

function MoviesPage() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        const results = await searchMovies(query);
        setMovies(results);
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search movies..."
                />
                <button type="submit">Search</button>
            </form>

            {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    );
}

export default MoviesPage;
