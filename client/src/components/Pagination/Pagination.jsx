import React from "react";
import styles from './pagination.module.css'

const Pagination = ({ current, setCurrent, max, input, setInput }) => {

    const next = () => {
        setCurrent(current + 1)
        setInput(input + 1)
        scrollToTop();
    }
    const lastPage = () => {
        setCurrent(max);
        setInput(max);
        scrollToTop();
    }
    const firstPage = () => {
        setCurrent(1);
        setInput(1);
        scrollToTop();
    }
    const previous = () => {
        setCurrent(current - 1)
        setInput(input - 1)
        scrollToTop();
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            setCurrent(parseInt(e.target.value))
            if (parseInt(e.target.value) < 1 || parseInt(e.target.value) > max || isNaN(parseInt(e.target.value))) {
                setCurrent(1)
                setInput(1)
            } else {
                setCurrent(parseInt(e.target.value))
            }
        }
    }

    return (
        <div className={styles.container}>
            <button disabled={current === 1} className={styles.button} onClick={firstPage}>{'<||'}</button>
            <button disabled={current === 1} className={styles.button} onClick={previous}>{'<|'}</button>
            <input className={styles.input} type="text" maxLength='2' name="page" onChange={(e) => setInput(e.target.value)} value={input} onKeyDown={(e) => onKeyDown(e)} />
            <span>of {max}</span>
            <button disabled={current === max} className={styles.btn} onClick={next} >{'|>'}</button>
            <button disabled={current === max} className={styles.btn} onClick={lastPage} >{'||>'}</button>
        </div>
    )
}

export default Pagination;