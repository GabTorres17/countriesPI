import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import styles from "../LandingPage/LandingPage.module.css";
import satelliteImg from "../../assets/satellite.png";


const LandingPage = () => {

    const navigate = useNavigate();

    const backToHome = () => {
        navigate('/countries');
    };
    return (
        <div className={styles.landingPage}>
            <header className={styles.header}>
                <h1>Bienvenidos a mi PI de Countries</h1>
                <p>Disfruta tu estadía en mi proyecto individual, tengo muchos países de todas las formas y colores :D</p>
            </header>
            <body>
                <div className={styles.planetPosition}>
                    <div className={styles.farOrbit}></div>
                    <div className={styles.nearOrbit}></div>
                    <div className={styles.mainPlanet}>
                        <div className={styles.floatingObjects}>
                            <div className={styles.satellite}>
                                <img src={satelliteImg}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <section className={styles.start}>
                    <button onClick={backToHome}>Comenzar</button>
                </section>
            </body>
            <footer className={styles.footer}>
                <p>&copy; 2024 Gabriel Torres Inc. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;