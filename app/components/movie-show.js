import {RenderStars} from "@/app/components/rating/RenderStarts";

export const MovieShow = ({movieData}) => {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="flex flex-col md:flex-row">
                <img className="w-full md:w-1/3 rounded-lg shadow-lg" src={movieData.image} alt={movieData.title}/>
                <div className="md:ml-4 md:w-2/3">
                    <h1 className="text-3xl font-bold mb-2">{movieData.title}</h1>
                    <p className="text-gray-700 mb-4">{movieData.description}</p>
                    <div className="flex items-center mb-4">
                        <div className="flex items-center">
                            {<RenderStars rating={movieData.rating}/>}
                        </div>
                        <span className="ml-2 text-gray-600">{movieData.rating} / 5</span>
                    </div>
                    <span className="ml-2 text-gray-600">{movieData.votes} votos</span>
                    <div className="mt-4">
                <span
                    className={`inline-block px-2 py-1 text-sm font-semibold rounded-full ${movieData.watched ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                    {movieData.watched ? 'Assistido' : 'Não assistido'}
                </span>
                    </div>
                </div>
            </div>
        </div>
    )

}