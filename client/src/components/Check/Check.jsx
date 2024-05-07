import React from "react";
import styles from './check.module.css';
import img from '../../assets/check.png'
import { useDispatch } from "react-redux";
import { errorClose } from "../../redux/actions";

const Check = () => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(errorClose())
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.flex}>
                    <button className={styles.btn} onClick={handleClick}>X</button>
                </div>
                <div className={styles.title} >
                    <h1 className={styles.h1} >Activity Created!</h1>
                </div>
                <div className={styles.status}>
                    <img className={styles.img} src={img} alt="check" />
                </div>
            </div>
        </div>
    )
}

export default Check;