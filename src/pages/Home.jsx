import { useState, useEffect } from 'react';
import { searchMovies } from '../api/omdb';
import MovieCard from '../components/MovieCard';
import { Search, Loader2, Sparkles } from 'lucide-react';

const Home = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [type, setType] = useState('');
    const [year, setYear] = useState('');

    const handleSearch = async (e, searchTerm = query) => {
        if (e) e.preventDefault();
        const searchToUse = searchTerm || 'batman';

        setLoading(true);
        setError('');
        const data = await searchMovies(searchToUse, 1, type, year);
        if (data.Response === 'True') {
            setMovies(data.Search);
        } else {
            setMovies([]);
            setError(data.Error);
        }
        setLoading(false);
    };

    useEffect(() => {
        handleSearch(null, query || 'batman');
    }, [type, year]);

    return (
        <div className="home-page fade-in">
            <header className="hero-toolbar">
                <div className="search-group">
                    <form onSubmit={handleSearch} className="search-container">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Find your next story..."
                            className="search-input"
                        />
                        <button type="submit" className="search-btn">
                            <Search size={18} strokeWidth={2.5} />
                        </button>
                    </form>
                </div>

                <div className="filter-toolbar">
                    <div className="filter-item">
                        <span className="label-tiny">Category</span>
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="select-noir"
                        >
                            <option value="">All Categories</option>
                            <option value="movie">Movies</option>
                            <option value="series">TV Shows</option>
                            <option value="episode">Episodes</option>
                        </select>
                    </div>

                    <div className="filter-item">
                        <span className="label-tiny">Release Year</span>
                        <input
                            type="number"
                            placeholder="Any Year"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            className="input-noir"
                        />
                    </div>
                </div>
            </header>

            <main className="results-section">
                {loading ? (
                    <div className="loader-container">
                        <div className="loader-noir"></div>
                    </div>
                ) : error ? (
                    <div className="empty-state">
                        <Sparkles size={48} className="icon-dim" />
                        <h3>{error === "Movie not found!" ? "We couldn't find matches for that title." : error}</h3>
                        <p>Try searching for classics like 'Interstellar' or 'The Witcher'</p>
                    </div>
                ) : (
                    <div className="movie-grid">
                        {movies.map(movie => (
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default Home;
