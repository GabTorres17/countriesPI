import React from 'react';
import styles from './Card.module.css';

export default function Card({ id, imgBandera, name, continente }) {
    return (
        <div className={styles.container}>
            <img src={imgBandera} alt={name} className={styles.image} />
            <div className={styles.info}>
                <h3>{id}</h3>
                <h3>{name}</h3>
                <h4>{continente}</h4>
            </div>
        </div>
    )
}

