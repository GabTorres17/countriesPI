import React from 'react';
import styles from './Card.module.css';
import { Link } from "react-router-dom";

export default function Card({ id, imgBandera, name, continente }) {
    return (
        <div className={styles.container}>
            <h3>{id}</h3>
            <h3>{name}</h3>
            <img src={imgBandera} alt={name} />
            <h4>{continente}</h4>
        </div>
    )
}

