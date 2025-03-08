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
                            {Array.from({length: 5}, (_, index) => (
                                <svg
                                    key={index}
                                    className={`w-5 h-5 ${index < movieData.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 15.27L16.18 20 14.54 13.97 20 9.24l-6.91-.59L10 2 8.91 8.65 2 9.24l5.46 4.73L3.82 20z"/>
                                </svg>
                            ))}
                        </div>
                        <span className="ml-2 text-gray-600">{movieData.rating} / 5</span>
                    </div>
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