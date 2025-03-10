"use client"
import {MovieSection} from "@/app/components/movie-section";
import {NavBar} from "@/app/components/navbar/NavBar";
import {useEffect, useState} from "react";
import {SaveMovieModal} from "@/app/components/modal/SaveMovieModal";
import {ref, get, set} from 'firebase/database'
import {database} from "@/app/firebase/firebase";



export default function Home() {
    const [isWatchedMovies, setWatchedMovies] = useState(false);
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [isCreateMovieModalOpen, setCreateMovieModalOpen] = useState(false);

    useEffect(() => {
        // api call
        getMovies().then((result) => {
            console.log(result);
            const moviesArray = Object.entries(result).map(([key, value]) => ({
                id: key,
                ...value
            }));
            setMovies(moviesArray)
        }).catch((e) => console.log(e))
    }, []);

    async function getMovies() {
        const movieRef = ref(database, 'movies')
        const snapshot = await get(movieRef)
        const movies = snapshot.val();

        console.log(JSON.stringify(movies, null, 2));
        return movies;
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

    const handleSaveMovie = async ({title, description, imageUrl, watched}) => {
        const movieUuid = crypto.randomUUID();
        try {
            const movieToSave = {
                uuid: movieUuid,
                title,
                description,
                image: imageUrl,
                watched,
                rating: 0,
                votes: 0
            }
            const movieRef = ref(database, `movies/${movieUuid}`);
            await set(movieRef, movieToSave);
            console.log(movieToSave);
        }catch (e) {
            console.log(e)
        }
    }


    return (
        <div>
            <NavBar navigation={navigation} onClick={() => setCreateMovieModalOpen(true)}/>
            <div className="mt-6">
                <MovieSection cardsData={filteredMovies} tittle={isWatchedMovies ? "Assistidos" : "Para assistir"}/>
            </div>
            <SaveMovieModal isOpen={isCreateMovieModalOpen} onClose={() => setCreateMovieModalOpen(false)}
                            onSubmit={async ({title, description, imageUrl, watched}) =>
                                handleSaveMovie({title, description, imageUrl, watched})

                            }/>
        </div>
    );
}

