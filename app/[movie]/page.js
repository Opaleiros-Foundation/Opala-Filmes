'use client'
import {MovieShow} from "@/app/components/movie-show";
import {MovieShowButtons} from "@/app/components/movie-show-buttons";
import {use} from 'react'

export default function Page({params}) {
    const resolvedParams = use(params)
    const {movie} = resolvedParams
    const movieData = {
        id: movie.id,
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQGMVu5lEspoDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718468009343?e=1746662400&v=beta&t=2kTcVsuC3FtldF659E7tkb_K66DMKZBZQ6hdLGqgAYA',
        title: 'Maraya',
        description: 'TIn a forgotten town, an ancient mansion stood, its walls covered in ivy and mystery. Whispers echoed through its empty halls, hinting at secrets buried for centuries. One stormy night, a lone traveler stepped inside, unaware that the past was waiting for him.',
        rating: 5,
        watched: true
    }
    return (
        <div className="flex flex-col">
            <MovieShow movieData={movieData} />
            <div className="flex justify-center mt-6">
                <MovieShowButtons onVoteClickButton={() => {}} onWatchClickButton={() => {}}/>
            </div>
        </div>
    )
}