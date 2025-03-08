import { useState } from 'react';

export const SaveMovieForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [watched, setWatched] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});

        const newErrors = {};
        if (!title) newErrors.title = 'Título é obrigatório';
        if (!description) newErrors.description = 'Descrição é obrigatória';
        if (!imageUrl) newErrors.imageUrl = 'URL da imagem é obrigatória';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        onSubmit({ title, description, imageUrl, watched });
    };

    return (
        <form className="w-full max-w-lg text-center" onSubmit={handleSubmit}>
            <div className="flex flex-wrap mb-4"> {/* Reduzido o margin bottom */}
                <div className="w-full mb-4"> {/* Reduzido o margin bottom */}
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="movie-title">
                        Título do Filme
                    </label>
                    <input
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.title ? 'border-red-500' : 'border-gray-200'} rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white`}
                        id="movie-title" type="text" placeholder="Título do filme"
                        value={title} onChange={(e) => setTitle(e.target.value)} />
                    {errors.title && <p className="text-red-500 text-xs italic">{errors.title}</p>}
                </div>
            </div>
            <div className="flex flex-wrap mb-4"> {/* Reduzido o margin bottom */}
                <div className="w-full mb-4"> {/* Reduzido o margin bottom */}
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="movie-description">
                        Descrição
                    </label>
                    <textarea
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.description ? 'border-red-500' : 'border-gray-200'} rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white`}
                        id="movie-description" placeholder="Descrição do filme"
                        value={description} onChange={(e) => setDescription(e.target.value)} />
                    {errors.description && <p className="text-red-500 text-xs italic">{errors.description}</p>}
                </div>
            </div>
            <div className="flex flex-wrap mb-4"> {/* Reduzido o margin bottom */}
                <div className="w-full mb-4"> {/* Reduzido o margin bottom */}
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="image-url">
                        URL da Imagem
                    </label>
                    <input
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${errors.imageUrl ? 'border-red-500' : 'border-gray-200'} rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white`}
                        id="image-url" type="text" placeholder="https://link-da-imagem.com"
                        value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                    {errors.imageUrl && <p className="text-red-500 text-xs italic">{errors.imageUrl}</p>}
                </div>
            </div>
            <div className="flex flex-wrap mb-4"> {/* Reduzido o margin bottom */}
                <div className="w-full mb-4"> {/* Reduzido o margin bottom */}
                    <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="watched-select">
                        Assistido
                    </label>
                    <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="watched-select"
                        value={watched} onChange={(e) => setWatched(e.target.value === 'true')}>
                        <option value="false">Não</option>
                        <option value="true">Sim</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-center mt-4"> {/* Reduzido o margin top */}
                <button
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit">
                    Salvar Filme
                </button>
            </div>
        </form>
    );
}