import React, { useState, useRef } from 'react';
import { RenderStars } from "@/app/components/rating/RenderStars"; // Corrigindo o import
import '@/app/components/rating/styles.css';
import './styles.css';

const MoviePicker = ({ cardsData }) => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [isScanning, setIsScanning] = useState(false);
    const carouselRef = useRef(null);

    // Cria um array com 3 repetições dos filmes para criar efeito infinito
    const movies = [...cardsData, ...cardsData, ...cardsData];
    
    const selectRandomMovie = () => {
        if (!cardsData?.length || isAnimating) return;
        
        setIsAnimating(true);
        setShowResult(false);
        setIsScanning(true);
        
        // Seleciona um filme aleatório do array original
        const randomIndex = Math.floor(Math.random() * cardsData.length);
        const movie = cardsData[randomIndex];
        setSelectedMovie(movie);

        // Calcula a largura do card + margem baseado no tamanho da tela
        const getCardWidth = () => {
            const width = window.innerWidth;
            if (width <= 480) return 154; // 140px + 14px margin
            if (width <= 768) return 176; // 160px + 16px margin
            if (width <= 1024) return 198; // 180px + 18px margin
            return 220; // 200px + 20px margin (desktop)
        };

        // Calcula a distância total do scroll
        const cardWidth = getCardWidth();
        const spins = 2; // Número de voltas completas
        const totalCards = cardsData.length;
        const spinDistance = (spins * totalCards + randomIndex) * cardWidth;

        // Aplica a transformação
        if (carouselRef.current) {
            carouselRef.current.style.transform = `translateX(-${spinDistance}px)`;
        }

        // Timer para mostrar o resultado
        setTimeout(() => {
            setIsAnimating(false);
            setIsScanning(false);
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
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MoviePicker;