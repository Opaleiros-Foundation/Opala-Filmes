import {MovieSection} from "@/app/components/movie-section";

// pages/index.js
export default function Home() {
    const cardsWatchedData = [
        {
            id: 1,
            image: 'https://media.licdn.com/dms/image/v2/D4D03AQGMVu5lEspoDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718468009343?e=1746662400&v=beta&t=2kTcVsuC3FtldF659E7tkb_K66DMKZBZQ6hdLGqgAYA',
            title: 'Mariah baiana',
            description: 'This is a brief description of the first card.',
            rating: 4,
        },
        {
            id: 2,
            image: 'https://media.licdn.com/dms/image/v2/D4D03AQGMVu5lEspoDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718468009343?e=1746662400&v=beta&t=2kTcVsuC3FtldF659E7tkb_K66DMKZBZQ6hdLGqgAYA',
            title: 'Maraya',
            description: 'This is a brief description of the second card.',
            rating: 5,
        },
        {
            id: 3,
            image: 'https://media.licdn.com/dms/image/v2/D4D03AQGMVu5lEspoDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718468009343?e=1746662400&v=beta&t=2kTcVsuC3FtldF659E7tkb_K66DMKZBZQ6hdLGqgAYA',
            title: 'Eduarda',
            description: 'This is a brief description of the third card.',
            rating: 3,
        },
        // Add more card objects as needed
    ];
    const cardsToWatchData = [
        {
            id: 1,
            image: 'https://media.licdn.com/dms/image/v2/D4D03AQGMVu5lEspoDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718468009343?e=1746662400&v=beta&t=2kTcVsuC3FtldF659E7tkb_K66DMKZBZQ6hdLGqgAYA',
            title: 'Mariah alcolatra',
            description: 'This is a brief description of the first card.',
            rating: 0,
        },
        {
            id: 2,
            image: 'https://media.licdn.com/dms/image/v2/D4D03AQGMVu5lEspoDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718468009343?e=1746662400&v=beta&t=2kTcVsuC3FtldF659E7tkb_K66DMKZBZQ6hdLGqgAYA',
            title: 'Maraya',
            description: 'This is a brief description of the second card.',
            rating: 0,
        },
        {
            id: 3,
            image: 'https://media.licdn.com/dms/image/v2/D4D03AQGMVu5lEspoDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718468009343?e=1746662400&v=beta&t=2kTcVsuC3FtldF659E7tkb_K66DMKZBZQ6hdLGqgAYA',
            title: 'Eduarda',
            description: 'This is a brief description of the third card.',
            rating: 0,
        },
    ]

    return (
        <div>
            <MovieSection cardsData={cardsToWatchData} tittle="Para assistir"/>
            <MovieSection cardsData={cardsWatchedData} tittle="Assistidos"/>
        </div>

    );
}

