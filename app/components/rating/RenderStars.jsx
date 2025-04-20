import './styles.css';

export const RenderStars = ({ rating }) => {
    return (
        <div className="stars-container">
            {[1, 2, 3, 4, 5].map((star) => (
                <span 
                    key={star} 
                    className={`star ${star <= rating ? 'filled' : 'empty'}`}
                >
                    ★
                </span>
            ))}
        </div>
    );
};