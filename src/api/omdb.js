const API_KEY = '56c5d9a6';
const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = async (query, page = 1, type = '', year = '') => {
    try {
        const typeParam = type ? `&type=${type}` : '';
        const yearParam = year ? `&y=${year}` : '';
        const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}${typeParam}${yearParam}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error searching movies:", error);
        return { Response: "False", Error: "Failed to connect to the database." };
    }
};

export const getMovieDetails = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching movie details:", error);
        return { Response: "False", Error: "Failed to connect to the database." };
    }
};
