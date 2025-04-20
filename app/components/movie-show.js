import { RenderStars } from "@/app/components/rating/RenderStarts";
import { MovieShowButtons } from "@/app/components/movie-show-buttons";
import "./movie-show/styles.css";

export const MovieShow = ({ movieData, onVoteClick, onWatchClick }) => {
    return (
        <div className="movie-show-container">
            <div className="movie-show-content">
                <div className="movie-show-grid">
                    <div className="movie-poster">
                        <img 
                            src={movieData?.image} 
                            alt={movieData?.title}
                            loading="lazy"
                        />
                    </div>
                    
                    <div className="movie-info">
                        <h1 className="movie-title">
                            {movieData?.title}
                        </h1>
                        
                        <p className="movie-description">
                            {movieData?.description}
                        </p>
                        
                        <div className="movie-rating">
                            <div className="rating-group">
                                <div className="stars-container">
                                    <RenderStars rating={movieData?.rating || 0} />
                                </div>
                                <span className="rating-value">
                                    {(movieData?.rating || 0).toFixed(1)}
                                </span>
                                <span className="votes-count">
                                    ({movieData?.votes || 0} votos)
                                </span>
                            </div>
                        </div>
                        
                        {movieData?.watched && (
                            <div className="watched-badge">
                                ✓ Filme já assistido
                            </div>
                        )}

                        <div className="movie-actions">
                            <MovieShowButtons 
                                onVoteClickButton={onVoteClick}
                                onWatchClickButton={onWatchClick}
                                wasWatched={movieData?.watched || false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};