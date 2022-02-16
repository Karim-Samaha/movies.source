import React, { useEffect } from "react"
import { useGlobalContext } from "../context"
import { moviesData } from "../data"
import Loading from "./loading"
import Movie from "./movie"


const MovieList = () => {
    const {
        fuc2010, fuc2005,
        is2005, setIs2005,
        filterMovies, is2010,
        setIs2010, allMovies,
        fucAll,
        func2015,
        is2015,
        setIs2015,
        fuc2000,
        is2000,
        setIs2000,
        fucClassics,
        classics,
        setClassics,
        setSearch
    } = useGlobalContext();

    useEffect(() => {
        setSearch("")
        setClassics(false)
        setIs2000(false)
        setIs2005(false)
        setIs2010(false)
        setIs2015(false)
    }, [])

    return (
        <section className="section">
            <h2>Movies</h2>
            <div className="center">
                <ul className="filter-section">
                    <li className="filter-item">
                        <button 
                        className={!is2015 && !is2010 && !is2005 && !is2000 && !classics ? "clicked" : null}
                         onClick={fucAll}>All</button>
                    </li>
                    <li className="filter-item">
                        <button className={is2015 ? "clicked" : null} onClick={func2015}>2015 / 2021</button>
                    </li>
                    <li className="filter-item">
                        <button className={is2010 ? "clicked" : null} onClick={fuc2010}>2010 / 2015</button>
                    </li>
                    <li className="filter-item">
                        <button className={is2005 ? "clicked" : null} onClick={fuc2005}>2005 / 2010</button>
                    </li>
                    <li className="filter-item">
                        <button className={is2000 ? "clicked" : null} onClick={fuc2000}>2000 / 2005</button>
                    </li>
                    <li className="filter-item">
                        <button className={classics ? "clicked" : null} onClick={fucClassics}>Classic</button>
                    </li>
                </ul>
            </div>

            <div className="movies-center">
                {
                    (is2010) ? filterMovies(moviesData, "2010", "2015")
                        : (is2005) ? filterMovies(moviesData, "2005", "2010")
                            : (is2015) ? filterMovies(moviesData, "2015", "2022")
                                : (is2000) ? filterMovies(moviesData, "2000", "2005")
                                    : (classics) ? filterMovies(moviesData, "1800", "2000")
                                        : allMovies(moviesData)
                }
            </div>
        </section>
    )
}

export default MovieList