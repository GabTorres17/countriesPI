import React, { useEffect } from "react";
import styles from "./DetailPage.module.css";
import { getCountryById, backNavigation } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import BackgroundSlider from "../../components/Background/BackgroundSlider";


export default function DetailPage() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const country = useSelector((state) => state.countryById);


  useEffect(() => {
    const fetchCountry = async () => {
      try {
        await dispatch(getCountryById(id));
        console.log(getCountryById)
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    };
    fetchCountry();
  }, [dispatch, id]);

  if (!country) {
    return <div>Cargando...</div>
  }
  {
    return (
      <div>
        <BackgroundSlider />
        <button className={styles.back} onClick={() => history(-1)}>←</button>
        <div className={styles.container}>
          <div className={styles.leftColumn}>
            <h1>{country.name}</h1>
            <img className={styles.detailImg} src={country.imgBandera} alt="Country Flag" />
          </div>
          <div className={styles.rightColumn}>
            <h2>ID: {country.id}</h2>
            <h2>Continente: {country.continente}</h2>
            <h2>Capital: {country.capital}</h2>
            <h2>Subregion: {country.subregion}</h2>
            <h2>Area: {country.area}</h2>
            <h2>Poblacion: {country.poblacion} habitantes</h2>
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
                <h3>ID: {activity.id}</h3>
                <h3>Dificultad: {activity.dificultad}</h3>
                <h3>Duracion: {activity.duracion}</h3>
                <h3>Temporada: {activity.temporada}</h3>
                <br />
                <hr />
              </div>
            ))
          ) : (
            <h2 className={styles.noAct}>Este país no contiene actividades hasta el momento</h2>
          )}
        </div>
      </div>
    );
  };
}