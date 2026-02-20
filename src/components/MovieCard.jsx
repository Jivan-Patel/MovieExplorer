import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';

const MovieCard = ({ movie }) => {
    const { isFavorite, addFavorite, removeFavorite } = useFavorites();
    const favorite = isFavorite(movie.imdbID);

    const toggleFavorite = (e) => {
        e.preventDefault();
        if (favorite) {
            removeFavorite(movie.imdbID);
        } else {
            addFavorite(movie.imdbID);
        }
    };

    return (
        <div className="movie-card fade-in">
            <Link to={`/movie/${movie.imdbID}`}>
                <img
                    src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'}
                    alt={movie.Title}
                    className="movie-poster"
                />

                <button
                    onClick={toggleFavorite}
                    className={`fav-btn-minimal ${favorite ? 'active' : ''}`}
                    title={favorite ? "Remove from Favorites" : "Add to Favorites"}
                >
                    <Heart size={16} fill={favorite ? 'currentColor' : 'none'} />
                </button>

                <div className="card-overlay">
                    <h3 className="card-title">{movie.Title}</h3>
                    <div className="card-meta">
                        <span>{movie.Year}</span>
                        <span className="badge">{movie.Type}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MovieCard;
