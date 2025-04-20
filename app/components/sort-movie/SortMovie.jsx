import React, { useState, useRef } from 'react';
import './styles.css';

const MoviePicker = ({ cardsData }) => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const carouselRef = useRef(null);

    // Cria um array com 3 repetições dos filmes para criar efeito infinito
    const movies = [...cardsData, ...cardsData, ...cardsData];
    
    const selectRandomMovie = () => {
        if (!cardsData?.length || isAnimating) return;
        
        // Reset do estado
        setIsAnimating(true);
        setShowResult(false);
        
        // Seleciona um filme aleatório do array original
        const randomIndex = Math.floor(Math.random() * cardsData.length);
        const movie = cardsData[randomIndex];
        setSelectedMovie(movie);

        // Calcula quantas posições o carrossel deve girar
        const spins = 2; // Número de voltas completas
        const totalCards = cardsData.length;
        const spinDistance = (spins * totalCards + randomIndex) * 220; // 220px é a largura do card

        // Aplica a animação
        if (carouselRef.current) {
            carouselRef.current.style.transition = 'none';
            carouselRef.current.style.transform = 'translateX(0)';
            carouselRef.current.offsetHeight; // Força reflow
            
            carouselRef.current.style.transition = 'transform 4s cubic-bezier(0.5, 0, 0.5, 1)';
            carouselRef.current.style.transform = `translateX(-${spinDistance}px)`;
        }

        // Finaliza a animação
        setTimeout(() => {
            setIsAnimating(false);
            setShowResult(true);
        }, 4000);
    };

    return (
        <div className="movie-picker-container">
            <button
                onClick={selectRandomMovie}
                disabled={isAnimating}
                className="movie-picker-button"
            >
                {isAnimating ? 'Sorteando...' : 'Sortear Filme'}
            </button>

            <div className="carousel-container">
                <div className="carousel-center-marker" />
                <div 
                    className="carousel-track"
                    ref={carouselRef}
                >
                    {movies.map((movie, index) => (
                        <div
                            key={`${movie.uuid}-${index}`}
                            className={`carousel-movie ${
                                selectedMovie?.uuid === movie.uuid && isAnimating ? 'selected' : ''
                            }`}
                        >
                            <img
                                src={movie.image}
                                alt={movie.title}
                                className="carousel-movie-image"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/150x200';
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {showResult && selectedMovie && (
                <div className="result-container">
                    <div className="selected-movie-card">
                        <img
                            src={selectedMovie.image}
                            alt={selectedMovie.title}
                            className="selected-movie-image"
                            onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/400x300';
                            }}
                        />
                        <div className="selected-movie-info">
                            <h3>{selectedMovie.title}</h3>
                            <p>{selectedMovie.description}</p>
                            <div className="rating">
                                {Array(5).fill(null).map((_, i) => (
                                    <span 
                                        key={i} 
                                        className={`star ${i < selectedMovie.rating ? 'filled' : ''}`}
                                    >
                                        {i < selectedMovie.rating ? '★' : '☆'}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MoviePicker;