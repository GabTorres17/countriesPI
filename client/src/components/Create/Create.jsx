import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checking, getCountries, getByName } from "../../redux/actions";
import styles from './create.module.css';

const Create = ({ setForm }) => {
    let countries = useSelector(state => state.countries)
    let sorting = useSelector(state => state.sorting)

    const dispatch = useDispatch()
    const [error, setError] = useState({})
    const [create, setCreate] = useState({
        name: '',
        dificultad: '',
        duracion: '',
        temporada: '',
        countryId: [],
    })

    useEffect(() => {
        setError(validateCreate(create))
        if (!sorting[0]) dispatch(getCountries())

    }, [dispatch, sorting, create])


    const validateCreate = (create) => {
        const errors = {}
        if (create.name.length < 3) errors.name = true

        if (create.dificultad === '') errors.dificultad = 'error'

        if (create.duracion === '') errors.duracion = 'error'

        if (create.temporada === '') errors.temporada = 'error'

        if (!create.countryId[0]) errors.country = 'error'

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
                countryId: [...create.countryId, e.target.value],
            })
        }
    }

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const newActivity = await axios.post('http://localhost:3001/activities', create);

            if (newActivity.status === 200) {
                setForm(false);
                dispatch(checking());
                window.location.reload();
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                console.log("Error 400: La solicitud no fue válida", error);
                alert("Ya existe esta actividad para uno de los países seleccionados.");
            } else {
                console.log("Error al enviar la solicitud:", error);
            }
        }
    };

    const handleDelete = (e) => {
        e.preventDefault()
        setCreate({
            ...create,
            countryId: create.countryId.filter(el => el !== e.target.value)
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
                                <label className={styles.label} >Nombre</label>
                                <input type="text" id="name" name="name" onChange={handleInput} className={styles.input} autoComplete='off' />
                            </div>
                            {error.name && <span className={styles.x} >❌</span>}
                        </div>
                        <div className={styles.column}>
                            <div className={styles.div} >
                                <label className={styles.label} >Dificultad</label>
                                <select id="dificultad" name="dificultad" onChange={handleInput} className={styles.input}>
                                    <option value="">--Selecciona la dificultad--</option>
                                    <option value="1">⭐ ☆ ☆ ☆ ☆</option>
                                    <option value="2">⭐⭐ ☆ ☆ ☆</option>
                                    <option value="3">⭐⭐⭐ ☆ ☆</option>
                                    <option value="4">⭐⭐⭐⭐ ☆</option>
                                    <option value="5">⭐⭐⭐⭐⭐</option>
                                </select>
                            </div>
                            {error.dificultad && <span className={styles.x} >❌</span>}
                        </div>
                        <div className={styles.column}>
                            <div className={styles.div} >
                                <label className={styles.label} >Duracion (hrs.)</label>
                                <input type="number" id="duracion" name="duracion" onChange={handleInput} className={styles.input} min='1' max='100' />
                            </div>
                            {error.duracion && <span className={styles.x} >❌</span>}
                        </div>
                        <div className={styles.column}>
                            <div className={styles.div} >
                                <label className={styles.label} >Temporada</label>
                                <select id="temporada" name="temporada" onChange={handleInput} className={styles.input} >
                                    <option value=''>--Elige Temporada--</option>
                                    <option value="Verano">Verano</option>
                                    <option value="Otoño">Otoño</option>
                                    <option value="Invierno">Invierno</option>
                                    <option value="Primavera">Primavera</option>
                                </select>
                            </div>
                            {error.season && <span className={styles.x} >❌</span>}
                        </div>
                        <div className={styles.column}>
                            <div className={styles.div}>
                                <label className={styles.label} >Países</label>
                                <select name="country" onChange={handleSelect} className={styles.input} >
                                    <option value='countries' >--Elige los países--</option>
                                    {countries?.map((e, i) => <option key={e.id} value={e.id}>{e.name}</option>)}
                                </select>
                            </div>
                            {error.country && <span className={styles.x} >❌</span>}
                        </div>
                        <div className={styles.flagBox}>
                            {create.countryId?.map((e, i) => <span key={i} className={styles.span} value={e} >{e}<button onClick={handleDelete} className={styles.btnDelete} value={e} >x</button> </span>)}
                        </div>
                    </div>
                    <div className={styles.btnBox}>
                        <button type="submit" className={styles.btn} hidden={Object.entries(error).length ? true : false}  >
                            <span className={styles.shadow}></span>
                            <span className={styles.edge}></span>
                            <span className={styles.front}>Crear</span>
                        </button>
                    </div>
                </form>
            </div>
        </div >
    )
}
export default Create;