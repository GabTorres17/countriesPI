import React, { useState, useEffect } from "react";
import styles from "./BackgroundSlider.module.css";
import background1 from "../../assets/background/background1.jpg";
import background2 from "../../assets/background/background2.jpg";
import background3 from "../../assets/background/background3.jpg";
import background4 from "../../assets/background/background4.jpg";
import background5 from "../../assets/background/background5.jpg";

const images = [
    { id: 0, url: background1 },
    { id: 1, url: background2 },
    { id: 2, url: background3 },
    { id: 3, url: background4 },
    { id: 4, url: background5 },
];

const BackgroundSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 7000);

        return () => clearInterval(interval);
    }, [])

    return (
        <div className={styles.bgContainer} style={{ backgroundImage: `url(${images[currentImageIndex].url})` }}></div>
    );
};

export default BackgroundSlider;