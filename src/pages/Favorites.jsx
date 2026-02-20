import { useState, useEffect } from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { getMovieDetails } from '../api/omdb';
import MovieCard from '../components/MovieCard';
import { Ghost, Loader2 } from 'lucide-react';

const Favorites = () => {
    const { favorites } = useFavorites();
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchFavoriteMovies = async () => {
            if (favorites.length === 0) {
                setFavoriteMovies([]);
                return;
            }

            setLoading(true);
            const movieDetails = await Promise.all(
                favorites.map(id => getMovieDetails(id))
            );
            setFavoriteMovies(movieDetails.filter(movie => movie.Response !== 'False'));
            setLoading(false);
        };

        fetchFavoriteMovies();
    }, [favorites]);

    if (loading) return (
        <div className="loader-container">
            <div className="loader-noir"></div>
        </div>
    );

    return (
        <div className="favorites-page fade-in">
            <header className="page-header">
                <h1 className="page-title">Watchlist</h1>
                <p className="page-subtitle text-secondary">{favorites.length} stories waiting to be told</p>
            </header>

            {favoriteMovies.length === 0 ? (
                <div className="empty-state">
                    <Ghost size={64} className="icon-dim" />
                    <h2>Empty Space</h2>
                    <p>Your watchlist is currently a void. Discover new stories and add them here.</p>
                </div>
            ) : (
                <div className="movie-grid section-spacing">
                    {favoriteMovies.map(movie => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;
