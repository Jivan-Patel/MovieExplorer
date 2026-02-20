import { createContext, useState, useContext, useEffect } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('cinema_hub_favorites');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('cinema_hub_favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (movieId) => {
        if (!favorites.includes(movieId)) {
            setFavorites([...favorites, movieId]);
        }
    };

    const removeFavorite = (movieId) => {
        setFavorites(favorites.filter(id => id !== movieId));
    };

    const isFavorite = (movieId) => {
        return favorites.includes(movieId);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
};
