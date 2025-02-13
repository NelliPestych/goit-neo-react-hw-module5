import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMoviesByQuery } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") || "";

    useEffect(() => {
        if (!query) return;

        const fetchMovies = async () => {
            try {
                const data = await fetchMoviesByQuery(query);
                setMovies(data.results);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, [query]);

    const handleSearch = (newQuery) => {
        if (newQuery.trim() === "") return;
        setSearchParams({ query: newQuery });
    };

    return (
        <div>
            <SearchBar onSubmit={handleSearch} />
            <MovieList movies={movies} />
        </div>
    );
};

export default MoviesPage;
