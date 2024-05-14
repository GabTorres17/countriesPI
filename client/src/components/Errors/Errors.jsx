import React from "react";
import s from './errors.module.css';
import img from '../../assets/notfound.jpg'
import { useDispatch } from "react-redux";
import { errorClose } from "../../redux/actions";

const Errors = () => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(errorClose())
    }

    return (
        <div className={s.container}>
            <div className={s.card}>
                <div className={s.flex}>
                    <button className={s.btn} onClick={handleClick}>✖</button>
                </div>
                <div className={s.title} >
                    <h1 className={s.h1} >Not Found</h1>
                </div>
                <div className={s.status}>
                    <img className={s.img} src={img} alt="error" />
                </div>
            </div>
        </div>
    )
}

export default Errors;