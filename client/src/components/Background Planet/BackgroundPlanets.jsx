import React from "react";
import styles from "./BackgroundPlanets.module.css";
import satelliteImg from "../../assets/satellite.png";

const BackgroundPlanets = () => {
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
                {/* <div className={styles.planetPosition}>
                    <div className={styles.farOrbit}></div>
                    <div className={styles.nearOrbit}></div>
                    <div className={styles.mainPlanet}>
                        <div className={styles.floatingObjects}>
                            <div className={styles.satellite}>
                                <img src={satelliteImg}></img>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>
        </div>
    )
}

export default BackgroundPlanets;