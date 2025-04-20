import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { MovieCard } from './MovieCard';

export const TierRow = ({ tier, movies }) => {
    return (
        <div className="tier-row" data-tier={tier.id}>
            <div className="tier-label">
                {tier.id}
            </div>
            <div className="tier-content">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.uuid}
                        movie={movie}
                    />
                ))}
            </div>
        </div>
    );
};