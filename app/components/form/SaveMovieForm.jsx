import { useState, useEffect } from 'react';
import { searchMovies } from '@/app/services/tmdb';
import { RenderStars } from "@/app/components/rating/RenderStars";
import './styles.css';

export const SaveMovieForm = ({ onSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [isManualMode, setIsManualMode] = useState(false);
    const [manualMovie, setManualMovie] = useState({
        title: '',
        description: '',
        imageUrl: ''
    });

    useEffect(() => {
        if (!isManualMode) {
            const delayDebounce = setTimeout(async () => {
                if (searchQuery.length >= 3) {
                    setIsLoading(true);
                    const results = await searchMovies(searchQuery);
                    setSearchResults(results);
                    setIsLoading(false);
                } else {
                    setSearchResults([]);
                }
            }, 500);

            return () => clearTimeout(delayDebounce);
        }
    }, [searchQuery, isManualMode]);

    const handleMovieSelect = (movie) => {
        setSelectedMovie(movie);
        setSearchResults([]);
        setSearchQuery('');
    };

    const handleManualInput = (e) => {
        const { name, value } = e.target;
        setManualMovie(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const toggleMode = () => {
        setIsManualMode(!isManualMode);
        setSearchQuery('');
        setSearchResults([]);
        setSelectedMovie(null);
        setManualMovie({
            title: '',
            description: '',
            imageUrl: ''
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});

        if (isManualMode) {
            if (!manualMovie.title) {
                setErrors({ title: 'O título é obrigatório' });
                return;
            }
            onSubmit({
                title: manualMovie.title,
                description: manualMovie.description,
                imageUrl: manualMovie.imageUrl,
                watched: false
            });
        } else {
            if (!selectedMovie) {
                setErrors({ search: 'Selecione um filme da lista' });
                return;
            }
            onSubmit({
                title: selectedMovie.title,
                description: selectedMovie.description,
                imageUrl: selectedMovie.imageUrl,
                watched: false
            });
        }
    };

    return (
        <form className="save-movie-form" onSubmit={handleSubmit}>
            <div className="mode-toggle">
                <button
                    type="button"
                    className={`mode-button ${!isManualMode ? 'active' : ''}`}
                    onClick={() => !isManualMode || toggleMode()}
                >
                    Buscar Filme
                </button>
                <button
                    type="button"
                    className={`mode-button ${isManualMode ? 'active' : ''}`}
                    onClick={() => isManualMode || toggleMode()}
                >
                    Inserir Manualmente
                </button>
            </div>

            {!isManualMode ? (
                <div className="search-container">
                    <label className="search-label">
                        Buscar Filme
                    </label>
                    <div className="search-input-container">
                        <input
                            className="search-input"
                            type="text"
                            placeholder="Digite o nome do filme..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {isLoading && (
                            <div className="loading-indicator">
                                <div className="spinner"></div>
                            </div>
                        )}
                    </div>
                    {errors.search && (
                        <p className="error-message">{errors.search}</p>
                    )}
                    
                    {searchResults.length > 0 && (
                        <div className="search-results">
                            {searchResults.map((movie) => (
                                <div
                                    key={movie.tmdbId}
                                    className="search-result-item"
                                    onClick={() => handleMovieSelect(movie)}
                                >
                                    {movie.imageUrl && (
                                        <img
                                            src={movie.imageUrl}
                                            alt={movie.title}
                                            className="result-poster"
                                        />
                                    )}
                                    <div className="result-info">
                                        <div className="result-title">{movie.title}</div>
                                        <div className="result-year">
                                            {movie.releaseDate?.split('-')[0]}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <div className="manual-input-container">
                    <div className="input-group">
                        <label className="input-label">Título do Filme</label>
                        <input
                            type="text"
                            name="title"
                            value={manualMovie.title}
                            onChange={handleManualInput}
                            className="manual-input"
                            placeholder="Digite o título do filme"
                        />
                        {errors.title && (
                            <p className="error-message">{errors.title}</p>
                        )}
                    </div>
                    
                    <div className="input-group">
                        <label className="input-label">Descrição</label>
                        <textarea
                            name="description"
                            value={manualMovie.description}
                            onChange={handleManualInput}
                            className="manual-input"
                            placeholder="Digite a descrição do filme"
                            rows="4"
                        />
                    </div>

                    <div className="input-group">
                        <label className="input-label">URL da Imagem</label>
                        <input
                            type="url"
                            name="imageUrl"
                            value={manualMovie.imageUrl}
                            onChange={handleManualInput}
                            className="manual-input"
                            placeholder="Cole a URL da imagem do filme"
                        />
                    </div>
                </div>
            )}

            {selectedMovie && !isManualMode && (
                <div className="selected-movie">
                    <div className="selected-movie-content">
                        {selectedMovie.imageUrl && (
                            <img
                                src={selectedMovie.imageUrl}
                                alt={selectedMovie.title}
                                className="selected-movie-poster"
                            />
                        )}
                        <div className="selected-movie-info">
                            <h3 className="selected-movie-title">{selectedMovie.title}</h3>
                            <p className="selected-movie-description">
                                {selectedMovie.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <div className="form-actions">
                <button
                    className="save-button"
                    type="submit"
                >
                    Salvar Filme
                </button>
            </div>
        </form>
    );
}