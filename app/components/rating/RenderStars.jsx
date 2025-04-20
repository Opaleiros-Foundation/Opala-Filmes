import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import './styles.css';

export const RenderStars = ({ rating, size = 'normal', interactive = false }) => {
    return (
        <div className={`stars-container ${size}`}>
            {[1, 2, 3, 4, 5].map((star, index) => (
                <FontAwesomeIcon
                    key={star}
                    icon={star <= rating ? faStarSolid : faStarRegular}
                    className={`star ${star <= rating ? 'filled' : 'empty'}`}
                    role={interactive ? 'button' : 'presentation'}
                    aria-label={interactive ? `Rate ${star} stars` : undefined}
                    style={{
                        '--delay': `${index * 0.1}s`
                    }}
                />
            ))}
        </div>
    );
};