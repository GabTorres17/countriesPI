import React, { useEffect, useState } from "react";
import styles from "./DetailPage.module.css";
import { getCountryById, backNavigation } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
/* import BackgroundSlider from "../../components/Background/BackgroundSlider"; */


export default function DetailPage() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const country = useSelector((state) => state.countryById);

  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        await dispatch(getCountryById(id));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching country details:", error);
        setLoading(false);
      }
    };
    fetchCountry();
  }, [dispatch, id]);

  if (Loading) {
    return <Loader />
  }

  if (!country) {
    return <div>Loading...</div>
  }
  {
    return (
      <div>
        {/*         <BackgroundSlider /> */}
        <button className={styles.back} onClick={() => history(-1)}>←</button>
        <div className={styles.container}>
          <div className={styles.leftColumn}>
            <h1>{country.name}</h1>
            <img className={styles.detailImg} src={country.imgBandera} alt="Country Flag" />
          </div>
          <div className={styles.rightColumn}>
            <h2>ID: {country.id}</h2>
            <h2>Continent: {country.continente}</h2>
            <h2>Capital: {country.capital}</h2>
            <h2>Subregion: {country.subregion}</h2>
            <h2>Area: {country.area} km2</h2>
            <h2>Population: {country.poblacion} inhabitants</h2>
          </div>
        </div>

        <div className={styles.activity}>
          {country.countryActivities && country.countryActivities.length > 0 ? (
            country.countryActivities.map((activity) => (
              <div key={activity.id}>
                <h2>
                  Activity:
                  <br /> {activity.name}
                </h2>
                <h3>Difficulty: {activity.dificultad}</h3>
                <h3>Duration: {activity.duracion}</h3>
                <h3>Season: {activity.temporada}</h3>
                <br />
              </div>
            ))
          ) : (
            <h2 className={styles.noAct}>This country has no activities yet.</h2>
          )}
        </div>
      </div>
    );
  };
}