"use client"
import {MovieSection} from "@/app/components/movie-section";
import {NavBar} from "@/app/components/navbar/NavBar";
import {useEffect, useState} from "react";

export default function Home() {
    const [isWatchedMovies, setWatchedMovies] = useState(false);
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        // api call
        const cardsWatchedData = [
            {
                id: 1,
                image: 'https://media.licdn.com/dms/image/v2/D4D03AQGMVu5lEspoDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718468009343?e=1746662400&v=beta&t=2kTcVsuC3FtldF659E7tkb_K66DMKZBZQ6hdLGqgAYA',
                title: 'Mariah baiana',
                description: 'This is a brief description of the first card.',
                rating: 4,
                watched: true
            },
            {
                id: 2,
                image: 'https://media.licdn.com/dms/image/v2/D4D03AQGMVu5lEspoDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718468009343?e=1746662400&v=beta&t=2kTcVsuC3FtldF659E7tkb_K66DMKZBZQ6hdLGqgAYA',
                title: 'Maraya',
                description: 'This is a brief description of the second card.',
                rating: 5,
                watched: true
            },
            {
                id: 3,
                image: 'https://media.licdn.com/dms/image/v2/D4D03AQGMVu5lEspoDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718468009343?e=1746662400&v=beta&t=2kTcVsuC3FtldF659E7tkb_K66DMKZBZQ6hdLGqgAYA',
                title: 'Eduarda',
                description: 'This is a brief description of the third card.',
                rating: 3,
                watched: true
            },
            {
                id: 1,
                image: 'https://media.licdn.com/dms/image/v2/D4D03AQGMVu5lEspoDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718468009343?e=1746662400&v=beta&t=2kTcVsuC3FtldF659E7tkb_K66DMKZBZQ6hdLGqgAYA',
                title: 'Mariah alcolatra',
                description: 'This is a brief description of the first card.',
                rating: 0,
                watched: false
            },
            {
                id: 2,
                image: 'https://media.licdn.com/dms/image/v2/D4D03AQGMVu5lEspoDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718468009343?e=1746662400&v=beta&t=2kTcVsuC3FtldF659E7tkb_K66DMKZBZQ6hdLGqgAYA',
                title: 'Maraya',
                description: 'This is a brief description of the second card.',
                rating: 0,
                watched: false
            },
            {
                id: 3,
                image: 'https://media.licdn.com/dms/image/v2/D4D03AQGMVu5lEspoDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718468009343?e=1746662400&v=beta&t=2kTcVsuC3FtldF659E7tkb_K66DMKZBZQ6hdLGqgAYA',
                title: 'Eduarda',
                description: 'This is a brief description of the third card.',
                rating: 0,
                watched: false
            },
        ];
       /**sleep(3000)
           .then(() => setMovies(() => cardsWatchedData))**/
       setMovies(() => cardsWatchedData)
    }, []);
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        const filtered = movies.filter(movie => movie.watched === isWatchedMovies);
        setFilteredMovies(filtered);
    }, [movies, isWatchedMovies]);

    const handleTabMovie = (type) => {
        if (type === 'Para assistir') setWatchedMovies(false)
        else setWatchedMovies(true)
    }

    const navigation = [
        {name: 'Para assistir', onClick: handleTabMovie, current: !isWatchedMovies},
        {name: 'Assitidos', onClick: handleTabMovie, current: isWatchedMovies},
    ]


    return (
        <div>
            <NavBar navigation={navigation}/>
            <div className="mt-6">
                <MovieSection cardsData={filteredMovies} tittle={isWatchedMovies ? "Assistidos": "Para assistir"}/>
            </div>
        </div>
    );
}

