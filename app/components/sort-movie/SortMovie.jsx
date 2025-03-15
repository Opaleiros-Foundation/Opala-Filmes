import React, { useState } from 'react';

const MoviePicker = ({ cardsData }) => {
    const [selectedMovie, setSelectedMovie] = useState(null);

    const selectRandomMovie = () => {
        if (!cardsData?.length) return;

        const randomIndex = Math.floor(Math.random() * cardsData.length);
        setSelectedMovie(cardsData[randomIndex]);
    };

    return (
        <div className="max-w-2xl mx-auto p-6 space-y-6">
            <button
                onClick={selectRandomMovie}
                className="w-full px-6 py-3 text-lg font-semibold bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            >
                Sortear Filme
            </button>

            {cardsData?.length === 0 ? (
                <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-500">
                    Não há filmes disponíveis
                </div>
            ) : selectedMovie ? (
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                        src={selectedMovie.image}
                        alt={selectedMovie.title}
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{selectedMovie.title}</h3>
                        <p className="text-gray-600 mb-4">{selectedMovie.description}</p>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <span key={i}>{i < (selectedMovie.rating || 0) ? '★' : '☆'}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-500">
                    Clique em "Sortear Filme" para selecionar um filme aleatório
                </div>
            )}
        </div>
    );
};

export default MoviePicker;