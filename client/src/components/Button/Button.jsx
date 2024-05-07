import React from 'react';
import s from './button.module.css'

const Button = ({ value, handlerClick, refresh, scale }) => {
    return (
        <button className={s.btn} onClick={handlerClick} style={{ scale: scale }}>
            <span className={s.shadow}></span>
            <span className={s.edge}></span>
            <span className={refresh ? s.refresh : s.front}>{value}</span>
        </button>
    )
}

export default Button