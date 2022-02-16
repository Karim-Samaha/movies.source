import React from "react";
import { moviesData } from "../data";
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from "../context";
import { AiFillFire } from "react-icons/ai";
import { AiFillFrown } from "react-icons/ai";

const SingleMovie = () => {
    const { id } = useParams()
    const { movies, setMovies } = useGlobalContext();
    const data = moviesData.filter((item) => {
        const { title, year } = item
        if (item.id == id) {

            return item
        }
    })
    const { title, year, runtime, genres, director, actors, plot, posterUrl, imdb, torrent } = data[0]
    return (

        <section className="singlemovie-section">
            <div className="img">
                <img src={posterUrl} alt={title} />
            </div>
            <div className="movie-info">
                <h3>{title}</h3>
                <div className="info"><span>Plot: </span> <p>{plot}</p></div>
                <div className="info"><span>Runtime: </span> {runtime} mins</div>
                <div className="info"><span>genres: </span> {genres}</div>
                <div className="info"><span>Director: </span> {director}</div>
                <div className="info"><span>Actors: </span> {actors}</div>
                <div className="info"><span>Release year: </span> {year}</div>
                <div className="info"><span>IMDB : </span> {imdb}
                    {(imdb.substr(0, 3) > 7) ? <AiFillFire /> : <AiFillFrown />}</div>
                    <div className="info"><span><a href={torrent} target="_blank">Download</a> </span></div>
            </div>
        </section>
    )
}

export default SingleMovie;