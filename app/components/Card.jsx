// components/Card.js
export const Card = ({ image, title, description, rating }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
            <img className="w-full h-48 object-cover" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 pb-2">
                <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, index) => (
                        <svg
                            key={index}
                            className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 15.27L16.18 20 14.54 13.97 20 9.24l-6.91-.59L10 2 8.91 8.65 2 9.24l5.46 4.73L3.82 20z" />
                        </svg>
                    ))}
                </div>
            </div>
        </div>
    );
};
