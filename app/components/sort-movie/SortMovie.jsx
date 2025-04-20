import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

const MoviePicker = ({ cardsData }) => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [showCarousel, setShowCarousel] = useState(true);
    const carouselRef = useRef(null);

    // Array para o carrossel com filmes duplicados
    const duplicatedCards = [...cardsData, ...cardsData, ...cardsData];
    const cardWidth = 220; // 200px largura + 20px padding

    const selectRandomMovie = () => {
        if (!cardsData?.length || isAnimating) return;

        if (showResult) {
            setShowResult(false);
            setSelectedMovie(null);
            setShowCarousel(true);
            
            if (carouselRef.current) {
                carouselRef.current.style.transition = 'none';
                carouselRef.current.style.transform = 'translateX(0)';
                carouselRef.current.offsetHeight;
            }
            
            setTimeout(() => {
                startAnimation();
            }, 100);
        } else {
            startAnimation();
        }
    };

    const startAnimation = () => {
        setIsAnimating(true);
        
        // Seleciona um filme aleatório do array original
        const randomIndex = Math.floor(Math.random() * cardsData.length);
        const selectedMovie = cardsData[randomIndex];
        setSelectedMovie(selectedMovie);

        // Calcula a posição central da viewport
        const viewportCenter = window.innerWidth / 2;
        
        // Encontra o índice do filme selecionado no array duplicado
        const selectedIndexInDuplicated = duplicatedCards.findIndex(
            (movie) => movie.uuid === selectedMovie.uuid
        );

        // Calcula a posição final para centralizar o filme selecionado
        const targetPosition = -(selectedIndexInDuplicated * cardWidth - viewportCenter + cardWidth / 2);

        if (carouselRef.current) {
            // Adiciona uma animação mais suave com easing
            carouselRef.current.style.transition = 'transform 4s cubic-bezier(0.25, 0.1, 0.25, 1)';
            carouselRef.current.style.transform = `translateX(${targetPosition}px)`;
        }

        // Aguarda o fim da animação para mostrar o resultado
        setTimeout(() => {
            setIsAnimating(false);
            setShowResult(true);
            
            setTimeout(() => {
                setShowCarousel(false);
            }, 1000);
        }, 4000);
    };

    // Reset do carrossel quando não está animando
    useEffect(() => {
        if (!isAnimating && carouselRef.current) {
            carouselRef.current.style.transition = 'none';
            carouselRef.current.style.transform = 'translateX(0)';
        }
    }, [isAnimating]);

    return (
        <div className="movie-picker-container">
            <div className="movie-picker-content">
                <button
                    onClick={selectRandomMovie}
                    disabled={isAnimating}
                    className="movie-picker-button"
                >
                    {isAnimating ? 'Sorteando...' : 'Sortear Filme'}
                </button>

                {showCarousel && (
                    <div className="carousel-container">
                        <div className="carousel-marker"></div>
                        <div 
                            className="carousel-track"
                            ref={carouselRef}
                        >
                            {duplicatedCards.map((movie, index) => (
                                <div
                                    key={`${movie.uuid}-${index}`}
                                    className={`carousel-movie ${
                                        selectedMovie?.uuid === movie.uuid ? 'selected' : ''
                                    }`}
                                >
                                    <img
                                        src={movie.image || 'https://via.placeholder.com/150x200'}
                                        alt={movie.title}
                                        className="carousel-movie-image"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {showResult && selectedMovie && (
                    <div className="selected-movie-container">
                        <div className="selected-movie-card">
                            <div className="selected-movie-poster">
                                <img
                                    src={selectedMovie.image || 'https://via.placeholder.com/400x300'}
                                    alt={selectedMovie.title}
                                    className="selected-movie-image"
                                />
                            </div>
                            <div className="selected-movie-info">
                                <h3 className="selected-movie-title">
                                    {selectedMovie.title}
                                </h3>
                                <p className="selected-movie-description">
                                    {selectedMovie.description}
                                </p>
                                <div className="selected-movie-rating">
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
        </div>
    );
};

export default MoviePicker;