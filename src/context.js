import React, { useState, useContext, useEffect } from 'react'
import { moviesData } from "./data"
import Movie from "./components/movie"



const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [is2000, setIs2000] = useState(false);
    const [is2005, setIs2005] = useState(false);
    const [is2010, setIs2010] = useState(false);
    const [is2015, setIs2015] = useState(false);
    const [classics, setClassics] = useState(false)

    const fucClassics = () => {
        setSearch("")
        setClassics(true)
        setIs2000(false)
        setIs2005(false)
        setIs2010(false)
        setIs2015(false)
    }
    const fucAll = () => {
        setSearch("")
        setClassics(false)
        setIs2000(false)
        setIs2005(false)
        setIs2010(false)
        setIs2015(false)
    }
    const fuc2000 = () => {
        setSearch("")
        setClassics(false)
        setIs2000(true)
        setIs2005(false)
        setIs2010(false)
        setIs2015(false)
    }
    const fuc2005 = () => {
        setSearch("")
        setClassics(false)
        setIs2000(false)
        setIs2005(true)
        setIs2010(false)
        setIs2015(false)
    }
    const fuc2010 = () => {
        setSearch("")
        setClassics(false)
        setIs2000(false)
        setIs2005(false)
        setIs2010(true)
        setIs2015(false)
    }
    const func2015 = () => {
        setSearch("")
        setClassics(false)
        setIs2000(false)
        setIs2005(false)
        setIs2010(false)
        setIs2015(true)
    }
    
    const filterMovies = (data, year1, year2) => {

        return data.filter((item) => {
            if (item.year >= parseInt(year1) && item.year < parseInt(year2)) {
                return item
            }
        }).map((item, index) => {
            return <Movie key={index} {...item} />
        })
    }
    const allMovies = (data) => {
        return data.filter((item) => {
            if (search === "") {
                return item
            } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
                return item
            }
        }).map((item, index) => {
            return <Movie key={index} {...item} />
        })
    }

    return <AppContext.Provider value={{
        loading,
        search,
        setSearch,
        movies,
        setLoading,
        setMovies,
        is2005,
        setIs2005,
        filterMovies,
        is2010,
        setIs2010,
        allMovies,
        fuc2005,
        fuc2010,
        fucAll,
        func2015,
        is2015,
        setIs2015,
        fuc2000,
        is2000,
        setIs2000,
        fucClassics,
        classics,
        setClassics
    }} >
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}


export { AppContext, AppProvider }