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
            src: 'https://media.discordapp.net/attachments/1317567528397963356/1347341850322931772/Screenshot_from_2025-03-06_19-22-01.png?ex=67d40b21&is=67d2b9a1&hm=ae886eb604240571f67b5498c9c93b8089fa70d0ce0d279a538fccb886fa6a5f&=&format=webp&quality=lossless',
            value: 1
        },
        {
            id: 2,
            src: 'https://media.discordapp.net/attachments/1152615149514010674/1348106875098366027/image.png?ex=67d4309d&is=67d2df1d&hm=7ee8cdef49097ad7219ea0a7c0cb2730a7cf9b3a4fa9ffac7ea2e6f256a4202d&=&format=webp&quality=lossless',
            value: 2
        },
        {
            id: 3,
            src: 'https://media.discordapp.net/attachments/1317567528397963356/1348119747216277514/Screenshot_from_2025-03-08_22-51-53.png?ex=67d393da&is=67d2425a&hm=da6187e93a2930504b2fa4a24e1f8fa3b4a3d78dac04cb4c18a9ead2a5ee0492&=&format=webp&quality=lossless',
            value: 3
        },
        {
            id: 4,
            src: 'https://media.discordapp.net/attachments/1317567528397963356/1342176467265519626/image.png?ex=67d3b57e&is=67d263fe&hm=ef1d5814374fced217528d1efbdc4d1da719a80b3fe555699b7adc27cb86df25&=&format=webp&quality=lossless',
            value: 4
        },
        {
            id: 5,
            src: 'https://media.discordapp.net/attachments/1317567528397963356/1349739864165318717/image.png?ex=67d432b4&is=67d2e134&hm=ebfa8b7eb1b28a6e19a95082ede9765be1ec3d733d78ebd8824c6aab0c79208d&=&format=webp&quality=lossless',
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

        const average = (value + currentRating) / votes + 1;

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