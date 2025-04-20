const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const searchMovies = async (query) => {
    if (!query) return [];
    
    try {
        const response = await fetch(
            `${BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&language=pt-BR`
        );
        const data = await response.json();
        
        return data.results.map(movie => ({
            tmdbId: movie.id,
            title: movie.title,
            description: movie.overview,
            imageUrl: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : null,
            releaseDate: movie.release_date,
            rating: movie.vote_average / 2 // TMDB usa escala de 0-10, convertendo para 0-5
        }));
    } catch (error) {
        console.error('Erro ao buscar filmes:', error);
        return [];
    }
};