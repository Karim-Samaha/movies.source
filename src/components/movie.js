import React from "react";
import { Link } from 'react-router-dom'



const Movie = ({ id, title, year, runtime, genres, director, actors, plot, posterUrl }) => {
    return <section className="movieContainer">
        <div className="movies-section">
            <img src={posterUrl} alt={title} />
            <div className="info">
                <h3>{title}</h3>
                <p>{year} / {genres}</p>
                <Link to={`/movies/${id}`} className="info-btn">
                    Detalis
                </Link>
            </div>
        </div>
    </section>
}

export default Movie