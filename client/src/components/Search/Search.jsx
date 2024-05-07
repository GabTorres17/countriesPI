import React, { useState } from "react";
import styles from './Search.module.css'
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/actions";

const Search = ({ setCurrent, setInput }) => {

    const dispatch = useDispatch()
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = () => {
        if (search.length) {
            dispatch(getByName(search))
            setInput(1)
            setCurrent(1)
        }
    }

    return (
        <div className={styles.searchBar}>
            <input id="search" type="search" className={styles.input} placeholder="Search..." onChange={(e) => handleSearch(e)} value={search} autoComplete='off' />
            <button type="submit" className={styles.searchButton} onClick={handleSubmit} ><span className="material-symbols-outlined">
                Search
            </span></button>
        </div>
    )
}

export default Search;