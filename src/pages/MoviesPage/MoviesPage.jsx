import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../api/tmdbApi";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./MoviesPage.module.css";

function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") || "";

    useEffect(() => {
        if (!query) return;

        const fetchMovies = async () => {
            try {
                const results = await searchMovies(query);
                setMovies(results);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, [query]);

    const handleSearch = (e) => {
        e.preventDefault();
        const searchValue = e.target.elements.query.value.trim();
        if (!searchValue) return;

        setSearchParams({ query: searchValue });
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    name="query"
                    defaultValue={query}
                    placeholder="Search movies..."
                />
                <button type="submit">Search</button>
            </form>

            {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    );
}

export default MoviesPage;
