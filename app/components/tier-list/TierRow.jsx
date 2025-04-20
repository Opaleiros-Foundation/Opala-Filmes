import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { MovieCard } from './MovieCard';

export const TierRow = ({ tier, movies }) => {
    return (
        <div className="tier-row">
            <div 
                className="tier-label"
                style={{ backgroundColor: tier.color }}
            >
                {tier.id}
            </div>
            <SortableContext
                items={movies.map(m => m.uuid)}
                strategy={horizontalListSortingStrategy}
            >
                <div className="tier-content">
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.uuid}
                            movie={movie}
                        />
                    ))}
                </div>
            </SortableContext>
        </div>
    );
};