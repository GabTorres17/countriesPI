import React from "react";
import satelliteImg from "../../assets/satellite.png";
import styles from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={styles.container}>
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
            <div>
            </div>
            <h1 className={styles.msg}>Loading...</h1>
        </div>
    )
}

export default Loader;