export const MovieCard = ({ movie }) => {
    return (
        <div className="tier-movie">
            <img 
                src={movie.image} 
                alt={movie.title}
                onError={(e) => {
                    e.target.src = '/placeholder-movie.jpg';
                }}
            />
        </div>
    );
};