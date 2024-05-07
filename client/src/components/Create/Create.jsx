import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checking, getCountries } from "../../redux/actions";
import styles from './create.module.css';

const Create = ({ setForm }) => {
    let countries = useSelector(state => state.countries)
    let sorting = useSelector(state => state.sorting)

    const dispatch = useDispatch()
    const [error, setError] = useState({})
    const [create, setCreate] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        country: [],
        /*  flags: [] */
    })

    useEffect(() => {
        setError(validateCreate(create))
        if (!sorting[0]) dispatch(getCountries())

    }, [dispatch, sorting, create])


    const validateCreate = (create) => {
        const errors = {}
        if (create.name.length < 3) errors.name = true

        if (create.difficulty === '') errors.difficulty = 'error'

        if (create.duration === '') errors.duration = 'error'

        if (create.season === '') errors.season = 'error'

        if (!create.country[0]) errors.country = 'error'

        return errors
    }

    const handleInput = (e) => {
        setCreate({
            ...create,
            [e.target.name]: e.target.value
        })
    }

    const handleSelect = (e) => {
        if (e.target.value !== 'countries') {
            setCreate({
                ...create,
                country: [...create.country, e.target.value],
                /* flags: [...create.flags, e.target.valor] */
            })
        }
    }

    const handleCreate = (e) => {
        axios.post('/activities', create)
        setForm(false)
        dispatch(checking())
    }

    const handleDelete = (e) => {
        e.preventDefault()
        setCreate({
            ...create,
            country: create.country.filter(el => el !== e.target.value)
        })
    }


    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.flex}>
                    <button className={styles.close} onClick={() => setForm(false)}>✖</button>
                </div>
                <form className={styles.form} onSubmit={handleCreate} >
                    <div>
                        <h2 className={styles.title}>Create Activity</h2>
                        <div className={styles.column}>
                            <div className={styles.div}>
                                <label className={styles.label} >Name</label>
                                <input type="text" name="name" onChange={handleInput} className={styles.input} autoComplete='off' />
                            </div>
                            {error.name && <span className={styles.x} >❌</span>}
                        </div>
                        <div className={styles.column}>
                            <div className={styles.div} >
                                <label className={styles.label} >Difficulty</label>
                                <select name="difficulty" onChange={handleInput} className={styles.input}>
                                    <option value="">--Select Difficulty--</option>
                                    <option value="1">⭐ ☆ ☆ ☆ ☆</option>
                                    <option value="2">⭐⭐ ☆ ☆ ☆</option>
                                    <option value="3">⭐⭐⭐ ☆ ☆</option>
                                    <option value="4">⭐⭐⭐⭐ ☆</option>
                                    <option value="5">⭐⭐⭐⭐⭐</option>
                                </select>
                            </div>
                            {error.difficulty && <span className={styles.x} >❌</span>}
                        </div>
                        <div className={styles.column}>
                            <div className={styles.div} >
                                <label className={styles.label} >Duration</label>
                                <input type="number" name="duration" onChange={handleInput} className={styles.input} min='1' max='100' />
                            </div>
                            {error.duration && <span className={styles.x} >❌</span>}
                        </div>
                        <div className={styles.column}>
                            <div className={styles.div} >
                                <label className={styles.label} >Season</label>
                                <select name="season" onChange={handleInput} className={styles.input} >
                                    <option value=''>--Select Season--</option>
                                    <option value="Summer">Summer</option>
                                    <option value="Autumn">Autumn</option>
                                    <option value="Winter">Winter</option>
                                    <option value="Spring">Spring</option>
                                </select>
                            </div>
                            {error.season && <span className={styles.x} >❌</span>}
                        </div>
                        <div className={styles.column}>
                            <div className={styles.div}>
                                <label className={styles.label} >Countries</label>
                                <select name="country" onChange={handleSelect} className={styles.input} >
                                    <option value='countries' >--Select Countries--</option>
                                    {countries?.map((e, i) => <option key={i} value={e.name}>{e.name}</option>)}
                                </select>
                            </div>
                            {error.country && <span className={styles.x} >❌</span>}
                        </div>
                        <div className={styles.flagBox}>
                            {/* {create.country?.map(e => <button onClick={handleDelete} key={e}><img className={s.flag} src={e} alt='flag' /></button>)} */}
                            {create.country?.map((e, i) => <span key={i} className={styles.span} value={e} >{e}<button onClick={handleDelete} className={s.btnDelete} value={e} >x</button> </span>)}
                        </div>
                    </div>
                    <div className={styles.btnBox}>
                        <button type="submit" className={styles.btn} hidden={Object.entries(error).length ? true : false}  >
                            <span className={styles.shadow}></span>
                            <span className={styles.edge}></span>
                            <span className={styles.front}>Create</span>
                        </button>
                    </div>
                </form>
            </div>
        </div >
    )
}
export default Create;