'use client'
export const MovieShowButtons = ({onVoteClickButton, onWatchClickButton, wasWatched}) => {
    return (
        <div className="flex gap-4">
            {!wasWatched && (
                <button
                    className="px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors cursor-pointer"
                    onClick={onWatchClickButton}>
                    Marcar como assistido
                </button>
            )}
            {wasWatched && (
                <button
                    className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                    onClick={onVoteClickButton}>
                    Votar
                </button>
            )}

        </div>
    )
}