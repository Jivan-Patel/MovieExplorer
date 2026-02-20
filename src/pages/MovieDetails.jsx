import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../api/omdb';
import { useFavorites } from '../context/FavoritesContext';
import { Heart, Star, ArrowLeft, Calendar, User, Clapperboard, Users } from 'lucide-react';

const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { isFavorite, addFavorite, removeFavorite } = useFavorites();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            setLoading(true);
            const data = await getMovieDetails(id);
            setMovie(data);
            window.scrollTo(0, 0);
            setLoading(false);
        };
        fetchDetails();
    }, [id]);

    if (loading) return (
        <div className="loader-container">
            <div className="loader-noir"></div>
        </div>
    );

    if (!movie || movie.Response === 'False') return (
        <div className="empty-state">
            <h2>Lost in the void</h2>
            <p>We couldn't retrieve the details for this title.</p>
            <button onClick={() => navigate('/')} className="select-noir" style={{ marginTop: '20px' }}>Back to Reality</button>
        </div>
    );

    const favorite = isFavorite(movie.imdbID);

    return (
        <div className="details-page-wrapper fade-in">
            {/* Cinematic Background Bleed */}
            <div
                className="details-bg-bleed"
                style={{ backgroundImage: `url(${movie.Poster !== 'N/A' ? movie.Poster : ''})` }}
            ></div>

            <button
                onClick={() => navigate(-1)}
                className="back-btn-noir"
            >
                <ArrowLeft size={18} /> <span>Back to Catalog</span>
            </button>

            <div className="detail-hero">
                <div className="detail-poster-wrapper">
                    <img
                        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/350x525?text=No+Poster'}
                        alt={movie.Title}
                        className="detail-poster"
                    />
                </div>

                <div className="detail-content">
                    <div className="detail-header">
                        <div className="detail-meta-list" style={{ marginBottom: '16px' }}>
                            <span className="badge">{movie.Type}</span>
                            <span className="badge" style={{ color: 'var(--color-accent)' }}>{movie.Rated}</span>
                        </div>
                        <h1 className="detail-title">{movie.Title}</h1>
                        <div className="detail-meta-list">
                            <div className="nav-link" style={{ cursor: 'default' }}>
                                <Calendar size={16} /> {movie.Released}
                            </div>
                            <div className="nav-link" style={{ cursor: 'default' }}>
                                <Star size={16} fill="var(--color-accent)" color="transparent" /> {movie.imdbRating}
                            </div>
                        </div>
                    </div>

                    <div className="plot-section">
                        <p className="plot-text">{movie.Plot}</p>
                    </div>

                    <div className="info-grid-noir">
                        <div className="info-item">
                            <span className="label-tiny">
                                <Clapperboard size={12} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                Genre
                            </span>
                            <span className="info-value">{movie.Genre}</span>
                        </div>
                        <div className="info-item">
                            <span className="label-tiny">
                                <User size={12} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                Director
                            </span>
                            <span className="info-value">{movie.Director}</span>
                        </div>
                        <div className="info-item" style={{ gridColumn: '1 / -1' }}>
                            <span className="label-tiny">
                                <Users size={12} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                                Main Cast
                            </span>
                            <span className="info-value">{movie.Actors}</span>
                        </div>
                    </div>

                    <div className="action-row">
                        <button
                            onClick={() => favorite ? removeFavorite(movie.imdbID) : addFavorite(movie.imdbID)}
                            className={`action-btn-noir ${favorite ? 'active' : ''}`}
                        >
                            <Heart size={20} fill={favorite ? 'currentColor' : 'none'} />
                            {favorite ? 'Reserved in Watchlist' : 'Add to Watchlist'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
