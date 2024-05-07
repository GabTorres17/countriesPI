import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import s from '../DetailPage/DetailPage.module.css';

const Detail = () => {
  const [imgBandera, setImgBandera] = useState(0)
  const [country, setCountry] = useState()
  let { id } = useParams()
  useEffect(() => {
    axios.get(`/countries/${id}`)
      .then(res => setCountry(res.data))
  }, [id])

  let max = country?.imgBandera?.length

  return (
    <div className={s.container}>
      <div className={s.nav}>
        <Nav back='true' />
      </div>
      <div className={s.flex}>
        <div className={s.card}>
          <div className={s.carousel}>
            <div className={s.carouselDiv}>
              <button className={s.arrow} disabled={imgBandera === 0} onClick={() => setImgBandera(imgBandera - 1)} >
                <span className="material-symbols-outlined">
                  arrow_back_ios
                </span>
              </button>
              <button className={s.arrow} disabled={imgBandera === max - 1} onClick={() => setImgBandera(image + 1)} >
                <span className="material-symbols-outlined">
                  arrow_forward_ios
                </span>
              </button>
              <img className={s.bigImg} src={country ? country.imgBandera[image] : undefined} alt='' />
            </div>
            <div className={s.imgContainer}>
              {
                country
                  ? country.imgBandera?.slice(0, 5).map((e, i) => (
                    <div key={i}>
                      <img className={s.imgs} src={e} alt="" onClick={() => setImgBandera(i)} />
                    </div>
                  ))
                  : undefined
              }
            </div>
          </div>
          <div>
            <img className={s.flag} src={country?.flag} alt={country?.name} />
            <h3 className={s.title}>{country?.name}</h3>
            <div className={s.tags}>
            </div>
            <div className={s.id}>
              <h3 className={s.span}>{country?.id}</h3>
            </div>
            <h4>Continent: <span className={s.span}>{country?.continente}</span></h4>
            <h4>Capital: <span className={s.span}>{country?.capital}</span></h4>
            <h4>Subregion: <span className={s.span}> {country?.subregion}</span></h4>
            <h4>Population: <span className={s.span}>{country?.poblacion}</span> </h4>
            <h4>Area: <span className={s.span}>{country?.area}</span></h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail;