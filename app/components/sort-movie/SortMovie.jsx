import React, { useState, useEffect } from 'react';

const MoviePicker = ({ cardsData }) => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

    useEffect(() => {
        return () => {
            setIsAnimating(false);
            setCurrentMovieIndex(0);
        };
    }, []);

    const selectRandomMovie = () => {
        if (!cardsData?.length) return;
        if (isAnimating) return;

        setIsAnimating(true);
        let currentIndex = 0;
        const animationInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % cardsData.length;
            setCurrentMovieIndex(currentIndex);
        }, 100);

        setTimeout(() => {
            clearInterval(animationInterval);
            setIsAnimating(false);
            const randomIndex = Math.floor(Math.random() * cardsData.length);
            setSelectedMovie(cardsData[randomIndex]);
        }, 2000);
    };

    const currentMovie = isAnimating
        ? cardsData[currentMovieIndex]
        : (selectedMovie || (cardsData?.[0] || null));

    return (
        <div className="max-w-2xl mx-auto p-6 space-y-6">
            <button
                onClick={selectRandomMovie}
                disabled={isAnimating}
                className={`
          w-full px-6 py-3 text-lg font-semibold
          bg-blue-600 text-white rounded-md
          hover:bg-blue-700 transition-colors
          duration-200 focus:outline-none
          focus:ring-2 focus:ring-blue-500
          focus:ring-offset-2 disabled:opacity-50
          disabled:cursor-not-allowed
        `}
            >
                {isAnimating ? 'Sorteando...' : 'Sortear Filme'}
            </button>

            {cardsData?.length === 0 ? (
                <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-500">
                    Não há filmes disponíveis
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative">
                        <img
                            src={currentMovie?.image || 'https://via.placeholder.com/400x300'}
                            alt={currentMovie?.title || 'Filme'}
                            className="w-full h-64 object-cover transition-opacity duration-300"
                        />
                        {isAnimating && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                <span className="text-white text-xl font-bold">Sorteando...</span>
                            </div>
                        )}
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-black">{currentMovie?.title || 'Selecione um filme'}</h3>
                        <p className="text-gray-600 mb-4">{currentMovie?.description || ''}</p>
                        <div className="flex gap-1">
                            {Array(5).fill(null).map((_, i) => (
                                <span key={i}>
                  {i < (currentMovie?.rating || 0) ? '★' : '☆'}
                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MoviePicker;