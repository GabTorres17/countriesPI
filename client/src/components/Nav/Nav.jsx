import React from "react";
import s from './nav.module.css';
import img from '../../assets/earth.png'
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Button from '../Button/Button';
import { useNavigate } from "react-router-dom";


const Nav = ({ setForm, searchBar, back, setInput, setCurrent }) => {

    const history = useNavigate();

    return (
        <div className={s.container}>
            <div className={s.flex}>
                <div className={s.navigate}>
                    <button className={s.backButton} onClick={() => history(-1)}>←</button>
                    <Link to='/'>
                        <div className={s.logo}>
                            <img src={img} alt="logo" className={s.img} />
                            <h1 className={s.title}>PI Countries</h1>
                        </div>
                    </Link>
                </div>
                {
                    searchBar && <Search setInput={setInput} setCurrent={setCurrent} />
                }
                <Button value='Create' handlerClick={() => setForm(true)} />
            </div>
        </div>
    )
}

export default Nav;