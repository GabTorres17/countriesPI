import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import styles from "../LandingPage/LandingPage.module.css";
import satelliteImg from "../../assets/satellite.png";


const LandingPage = () => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/countries');
    };
    return (
        <div className={styles.landingPage}>
            <section className={styles.section}>
                <div className={`${styles.star} ${styles.star1}`}></div>
                <div className={`${styles.star} ${styles.star2}`}></div>
                <div className={`${styles.star} ${styles.star3}`}></div>
                <div className={`${styles.star} ${styles.star4}`}></div>
                <div className={`${styles.star} ${styles.star5}`}></div>
                <div className={`${styles.star} ${styles.star6}`}></div>
                <div className={`${styles.star} ${styles.star7}`}></div>
                <div className={`${styles.star} ${styles.star8}`}></div>
                <div className={styles.intro}>
                    <h1>Welcome to my Countries Project</h1>
                    <p>Enjoy your stay! This is the first project I worked on. Here you can find a great selection of countries and filter them using advanced filters.</p>
                    <div className={styles.start}>
                        <button onClick={goToHome}>Start</button>
                    </div>
                </div>
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
            </section>
            {/* <footer className={styles.footer}>
                <p>&copy; 2024 Gabriel Torres Inc. All rights reserved.</p>
            </footer> */}
        </div>
    );
}

export default LandingPage;