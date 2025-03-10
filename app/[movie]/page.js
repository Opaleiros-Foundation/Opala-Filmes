'use client'
import {MovieShow} from "@/app/components/movie-show";
import {MovieShowButtons} from "@/app/components/movie-show-buttons";
import {use, useEffect, useState} from 'react'
import {Modal} from "@/app/components/modal/Modal";
import {get, ref, set} from "firebase/database";
import {database} from "@/app/firebase/firebase";
import {Alert} from "@/app/components/alert/Alert";

export default function Page({params}) {
    const resolvedParams = use(params)
    const {movie} = resolvedParams
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState(null);
    const [currentMovie, setCurrentMovie] = useState({})
    const [alertMessage, setAlertMessage] = useState("");
    const [isError, setIsError] = useState(false);

    async function getMovie() {
        const movieRef = ref(database, `movies/${movie}`)
        const snapshot = await get(movieRef)
        const movies = snapshot.val();


        console.log(JSON.stringify(movies, null, 2));
        return movies;
    }

    useEffect(() => {
        getMovie().then((movie) => {
            setCurrentMovie(movie)
        }).catch((e) => console.log(e))
    }, [movie, alertMessage])
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
        console.log(JSON.stringify(currentMovie))
        const newRating = getAverage(value, currentMovie.votes, currentMovie.rating)
        saveVote(currentMovie, newRating).then((result) => {
            console.log(result);
        })
        console.log("Selected Value: ", value);
    };

    const getAverage = (value, votes, currentRating) => {
        if (votes <= 0) return Math.max(0, Math.min(5, value));

        const average = (value + currentRating) / votes;

        return Math.max(0, Math.min(5, parseFloat(average.toFixed(1))));
    };


    const saveVote = async (movieData, newRating) => {
        console.log(JSON.stringify(movieData, null, 2))
        console.log(newRating)
        try {
            const movieToSave = {
                ...movieData,
                rating: newRating,
                votes: movieData.votes + 1
            }
            await saveChanges(movieToSave)
            console.log(movieToSave);
        } catch (e) {
            console.log(e)
        } finally {
            setIsModalOpen(false)
        }
    }

    const updateToWatched = async(movieData) => {
        try {
            const movieToSave = {
               ...movieData,
                watched: true,
            }
            await saveChanges(movieToSave)
            console.log(movieToSave);
        } catch (e) {
            console.log(e)
        }
    }


    const saveChanges = async (movieData) => {
        try {
            const movieRef = ref(database, `movies/${movieData.uuid}`);
            await set(movieRef, movieData);
            console.log(movieData);
            setIsError(false);
            setAlertMessage("Filme atualizado com sucesso!");

            setTimeout(() => setAlertMessage(""), 3000);
        } catch (e) {
            console.log(e)
            setTimeout(() => setAlertMessage(""), 3000);
        }
    }
    return (
        <div className="flex flex-col">
            {alertMessage && (
                <Alert alertMessage={alertMessage} isSuccess={!isError}/>
            )}

            <MovieShow movieData={currentMovie}/>
            <div className="flex justify-center mt-6">
                <MovieShowButtons onVoteClickButton={() => setIsModalOpen(true)} onWatchClickButton={() => updateToWatched(currentMovie)} wasWatched={currentMovie.watched}/>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}
                   onSelectValue={(value) => handleImageClick(value)} images={images}/>
        </div>
    )
}