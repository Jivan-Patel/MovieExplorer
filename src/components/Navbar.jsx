import { Link, useLocation } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { Film, Heart, Info, Home } from 'lucide-react';

const Navbar = () => {
    const { favorites } = useFavorites();
    const location = useLocation();

    return (
        <nav className="navbar">
            <Link to="/" className="nav-brand">
                <Film color="var(--color-accent)" size={28} />
                <span>CinemaHub</span>
            </Link>

            <div className="nav-links">
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                    <Home size={18} />
                    <span>Home</span>
                </Link>
                <Link to="/favorites" className={`nav-link ${location.pathname === '/favorites' ? 'active' : ''}`}>
                    <Heart size={18} />
                    <span>Favorites</span>
                    {favorites.length > 0 && (
                        <span className="nav-badge">{favorites.length}</span>
                    )}
                </Link>
                <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
                    <Info size={18} />
                    <span>About</span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
