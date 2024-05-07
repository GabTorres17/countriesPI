import React from "react";
import s from './Nav.module.css';
import img from '../../assets/earth.png'
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Button from '../Button/Button';


const Nav = ({ setForm, searchBar, back, setInput, setCurrent }) => {
    return (
        <div className={s.container}>
            {
                back &&
                <Link to='/home'>
                    <p className={s.back}>{'<'}</p>
                </Link>
            }
            <div className={s.flex}>
                <Link to='/'>
                    <div className={s.logo}>
                        <img src={img} alt="logo" className={s.img} />
                        <h1 className={s.title}>PI Countries</h1>
                    </div>
                </Link>
                {
                    searchBar && <Search setInput={setInput} setCurrent={setCurrent} />
                }
                <Button value='Create' handlerClick={() => setForm(true)} />
            </div>
        </div>
    )
}

export default Nav;