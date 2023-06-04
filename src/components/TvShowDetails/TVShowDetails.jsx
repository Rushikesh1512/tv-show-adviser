import React from 'react'
import s from './style.module.css'
import FiveStartComp from '../FiveStartComp.jsx/FiveStartComp';
export default function TVShowDetails({Tvshow}) {

    const rating=Tvshow.vote_average/2;
  return (
    <div>
      <div className={s.title}>{Tvshow.name}</div>
      <div classname={s.rating}>
        <FiveStartComp rating={rating}/>
        <span>{rating}</span>
        </div>
      <div className={s.overview}>{Tvshow.overview}</div>
    </div>
  )
}
