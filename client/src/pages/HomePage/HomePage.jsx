import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getActivities, getCountries, backNavigation } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import Filters from "../../components/Filter/Filter";
import Errors from "../../components/Errors/Errors";
import Create from "../../components/Create/Create";
import Check from "../../components/Check/Check";
import s from "./HomePage.module.css";
import Cards from "../../components/Cards/Cards";
import Pagination from '../../components/Pagination/pagination';
import Nav from "../../components/Nav/Nav"

const HomePage = () => {
    const dispatch = useDispatch()
    const sorting = useSelector(state => state.sorting)
    const error = useSelector(state => state.error)
    const check = useSelector(state => state.check)
    const [form, setForm] = useState(false)
    const activities = useSelector(state => state.activities)
    const history = useNavigate();

    const [sort, setSort] = useState(true)

    const [input, setInput] = useState(1)
    const [current, setCurrent] = useState(1)
    const [perPage] = useState(10)
    const max = Math.ceil(sorting.length / perPage);

    useEffect(() => {
        if (!sorting[0]) {
            dispatch(getCountries())
        }
        dispatch(getActivities())
    }, [dispatch, sorting])
    console.log(activities)
    return (
        <div className={s.container}>
            {sorting.length > 0 ?
                <div>
                    <button onClick={() => history(-1)}>←</button>
                    <Nav setForm={setForm} setInput={setInput} setCurrent={setCurrent} searchBar='true' />
                    {error && <Errors />}
                    {check && <Check />}
                    {form && <Create setForm={setForm} />}
                    <Filters setSort={setSort} sort={sort} setInput={setInput} setCurrent={setCurrent} />
                    <div className={s.gridContainer}>
                        <div className={s.grid}>
                            {sorting.slice((current - 1) * perPage, (current - 1) * perPage + perPage).map((country, id) => {
                                return (
                                    <div key={id}>
                                        <Cards countries={[country]} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <Pagination current={current} setCurrent={setCurrent} max={max} input={input} setInput={setInput} />
                </div> : null
            }
        </div>
    )
}

export default HomePage;