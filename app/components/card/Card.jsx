import { RenderStars } from "@/app/components/rating/RenderStarts";
import './styles.css';

export const Card = ({ image, title, description, rating }) => {
    const truncateText = (text, maxLength) => {
        if (!text) return '';
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };

    return (
        <div className="movie-card">
            <div className="movie-card-corner movie-card-corner-tl"></div>
            <div className="movie-card-corner movie-card-corner-tr"></div>
            <div className="movie-card-corner movie-card-corner-bl"></div>
            <div className="movie-card-corner movie-card-corner-br"></div>
            
            <img 
                className="movie-card-image" 
                src={image} 
                alt={title}
                onError={(e) => {
                    e.target.src = '/placeholder-movie.jpg';
                }}
            />
            <div className="movie-card-content">
                <h2 className="movie-card-title" title={title}>
                    {title}
                </h2>
                <p className="movie-card-description">
                    {truncateText(description, 120)}
                </p>
                <div className="movie-card-rating">
                    <RenderStars rating={rating} />
                    <span>{rating.toFixed(1)}</span>
                </div>
            </div>
        </div>
    );
};