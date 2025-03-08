'use client'
export const MovieShowButtons = ({onVoteClickButton, onWatchClickButton}) => {
  return (
      <div className="flex gap-4">
          <button className="px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors" onClick={onWatchClickButton}>
              Assistido
          </button>
          <button className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors" onClick={onVoteClickButton}>
              Votar
          </button>
      </div>
  )
}