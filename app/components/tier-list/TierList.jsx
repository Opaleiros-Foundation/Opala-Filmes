'use client'
import { useState, useEffect } from 'react';
import { TierRow } from './TierRow';
import { MovieCard } from './MovieCard';
import './styles.css';

const TIERS = [
    { id: 'S', color: '#FF7676', label: 'Obras-Primas' },
    { id: 'A', color: '#FFA500', label: 'Excelentes' },
    { id: 'B', color: '#FFD700', label: 'Muito Bons' },
    { id: 'C', color: '#90EE90', label: 'Bons' },
    { id: 'D', color: '#87CEEB', label: 'Medianos' },
    { id: 'F', color: '#8B8B8B', label: 'Fracos' }
];

export const TierList = ({ movies, initialTiers, unrankedMovies }) => {
    const [tierMovies, setTierMovies] = useState({});
    const [unranked, setUnranked] = useState([]);

    useEffect(() => {
        if (initialTiers) {
            setTierMovies(initialTiers);
            setUnranked(unrankedMovies || []);
        }
    }, [initialTiers, unrankedMovies]);

    return (
        <div className="tier-list-container">
            <h2 className="tier-list-title">Tier List</h2>
            
            {TIERS.map((tier) => (
                <div key={tier.id} className="tier-row" style={{ backgroundColor: tier.color }}>
                    <div className="tier-label">{tier.id}</div>
                    <div className="tier-content">
                        {tierMovies[tier.id]?.map((movie) => (
                            <MovieCard
                                key={movie.uuid}
                                movie={movie}
                                isStatic={true}
                            />
                        ))}
                    </div>
                </div>
            ))}

            <div className="unranked-section">
                <h3>Filmes não classificados</h3>
                <div className="unranked-content">
                    {unranked.map((movie) => (
                        <MovieCard
                            key={movie.uuid}
                            movie={movie}
                            isStatic={true}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};