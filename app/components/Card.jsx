// components/Card.js
import {RenderStars} from "@/app/components/rating/RenderStarts";

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
                    {<RenderStars rating={rating}/> }
                </div>
            </div>
        </div>
    );
};
