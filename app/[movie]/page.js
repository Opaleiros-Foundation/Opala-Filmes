'use client'
import {MovieShow} from "@/app/components/movie-show";
import {MovieShowButtons} from "@/app/components/movie-show-buttons";
import {use, useState} from 'react'
import {Modal} from "@/app/components/modal/Modal";

export default function Page({params}) {
    const resolvedParams = use(params)
    const {movie} = resolvedParams
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState(null);

    const movieData = {
        id: movie.id,
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQGMVu5lEspoDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718468009343?e=1746662400&v=beta&t=2kTcVsuC3FtldF659E7tkb_K66DMKZBZQ6hdLGqgAYA',
        title: 'Maraya',
        description: 'TIn a forgotten town, an ancient mansion stood, its walls covered in ivy and mystery. Whispers echoed through its empty halls, hinting at secrets buried for centuries. One stormy night, a lone traveler stepped inside, unaware that the past was waiting for him.',
        rating: 5,
        watched: false
    }
    const images = [
        {
            id: 1,
            src: 'https://i.pinimg.com/originals/e4/7f/a4/e47fa4eb123ce9f7ceb819674d8b4dc2.png',
            value: 1
        },
        {
            id: 2,
            src: 'https://media.licdn.com/dms/image/v2/D4D03AQGMVu5lEspoDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718468009343?e=1746662400&v=beta&t=2kTcVsuC3FtldF659E7tkb_K66DMKZBZQ6hdLGqgAYA',
            value: 2
        },
        {
            id: 3,
            src: 'https://media.licdn.com/dms/image/v2/D4D03AQGMVu5lEspoDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718468009343?e=1746662400&v=beta&t=2kTcVsuC3FtldF659E7tkb_K66DMKZBZQ6hdLGqgAYA',
            value: 3
        },
        {
            id: 4,
            src: 'https://media.licdn.com/dms/image/v2/D4D03AQGMVu5lEspoDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718468009343?e=1746662400&v=beta&t=2kTcVsuC3FtldF659E7tkb_K66DMKZBZQ6hdLGqgAYA',
            value: 4
        },
        {
            id: 5,
            src: 'https://media.licdn.com/dms/image/v2/D4D03AQGMVu5lEspoDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718468009343?e=1746662400&v=beta&t=2kTcVsuC3FtldF659E7tkb_K66DMKZBZQ6hdLGqgAYA',
            value: 5
        },
    ];
    const handleImageClick = (value) => {
        setSelectedValue(value);
        console.log("Selected Value: ", value);
    };
    return (
        <div className="flex flex-col">
            <MovieShow movieData={movieData}/>
            <div className="flex justify-center mt-6">
                <MovieShowButtons onVoteClickButton={() => setIsModalOpen(true)} onWatchClickButton={() => {
                }} wasWatched={movieData.watched}/>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}
                   onSelectValue={(value) => handleImageClick(value)} images={images}/>
        </div>
    )
}