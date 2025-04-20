'use client'
export const MovieShowButtons = ({onVoteClickButton, onWatchClickButton, wasWatched}) => {
    return (
        <div className="flex gap-4">
            {!wasWatched && (
                <button
                    className="action-button watch-button flex-1 group relative"
                    onClick={onWatchClickButton}>
                    <span className="relative z-10">Marcar como assistido</span>
                </button>
            )}
            {wasWatched && (
                <button
                    className="action-button vote-button flex-1 group relative"
                    onClick={onVoteClickButton}>
                    <span className="relative z-10">Votar</span>
                </button>
            )}
        </div>
    )
}