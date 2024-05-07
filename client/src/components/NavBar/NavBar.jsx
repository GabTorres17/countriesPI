import React from 'react';
import './navbar.module.css';
import { NavLink } from 'react-router-dom';
import Search from "../../components/Search/Search";

// const Navbar = (props) => {
//     return (
//         <nav className="navbar">
//             <div className="navbar-container">
//                 <div className="navbar-logo">
//                     <a href="/">Logo</a>
//                 </div>
//                 <ul className="navbar-menu">
//                     <li><a href="/">Inicio</a></li>
//                     <li><a href="/about">Acerca de</a></li>
//                     <li><a href="/services">Servicios</a></li>
//                     <li><a href="/contact">Contacto</a></li>
//                 </ul>
//             </div>
//         </nav>
//     );
// }

const NavBar = function ({ setForm, searchBar, back, setInput, setCurrent }) {
    return (
        <div
            style={{ backgroundColor: "coral", height: "120px", width: "600", textAlign: "center" }}>
            <h2>NavBar</h2>
            <button>
                <NavLink
                    to="/"
                    style={({ isActive }) => isActive ? { color: "lightcoral" } : null}
                >Home</NavLink>
            </button>
            <button>
                <NavLink
                    to="/form"
                    style={({ isActive }) => isActive ? { color: "lightcoral" } : null}
                >Create your activity</NavLink>
            </button>
            {
                searchBar && <Search setInput={setInput} setCurrent={setCurrent} />
            }
        </div>
    )
}

export default NavBar;