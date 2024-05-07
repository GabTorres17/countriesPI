import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";
import { Link } from "react-router-dom"

export default function Cards({ countries }) {
    if (countries) {
        return (
            <div className={styles.container} >
                {countries.map(({ id, name, imgBandera, continente }) => (
                    <Link to={`/countries/${id}`} key={id}>
                        <Card name={name} imgBandera={imgBandera} continente={continente} />
                    </Link>
                ))}
            </div>
        )
    } else {
        return <div>No se encontró el país</div>
    }
}
