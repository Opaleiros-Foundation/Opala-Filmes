export const RenderStars = ({rating}) => {
    return Array.from({ length: 5 }, (_, index) => {
        let starType;

        if (index + 1 <= rating) {
            starType = "full"; // Estrela cheia
        } else if (index + 0.5 <= rating) {
            starType = "half"; // Meia estrela
        } else {
            starType = "empty"; // Estrela vazia
        }

        return (
            <svg
                key={index}
                className={`w-5 h-5 ${
                    starType === "full" ? "text-yellow-500" : starType === "half" ? "text-yellow-300" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                {starType === "full" && (
                    <path d="M10 15.27L16.18 20 14.54 13.97 20 9.24l-6.91-.59L10 2 8.91 8.65 2 9.24l5.46 4.73L3.82 20z" />
                )}
                {starType === "half" && (
                    <>
                        <defs>
                            <linearGradient id={`halfStar-${index}`} x1="0" x2="1" y1="0" y2="0">
                                <stop offset="50%" stopColor="rgb(234 179 8)" />
                                <stop offset="50%" stopColor="rgb(209 213 219)" />
                            </linearGradient>
                        </defs>
                        <path
                            fill={`url(#halfStar-${index})`}
                            d="M10 15.27L16.18 20 14.54 13.97 20 9.24l-6.91-.59L10 2 8.91 8.65 2 9.24l5.46 4.73L3.82 20z"
                        />
                    </>
                )}
                {starType === "empty" && (
                    <path d="M10 15.27L16.18 20 14.54 13.97 20 9.24l-6.91-.59L10 2 8.91 8.65 2 9.24l5.46 4.73L3.82 20z" />
                )}
            </svg>
        );
    });
};
