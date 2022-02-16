import React from "react";
import { useGlobalContext } from "../context";
const SearchForm = () => {
    const { setSearch } = useGlobalContext();
    const searchValue = React.useRef("")

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const search = () => {
        
        setSearch(searchValue.current.value)
    }
    

    return <section className="form-section">
        <form>
            <label htmlFor='text' onSubmit={handleSubmit}>Search your favrite movie</label>
            <input onChange={search} type="text" id="name" ref={searchValue}/>
        </form>
    </section>
}

export default SearchForm;