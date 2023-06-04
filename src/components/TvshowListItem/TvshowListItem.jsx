import React from 'react'
import s from './style.module.css'
import { SMALL_IMG_COVER_BASE_URL } from '../../Api/config'
export default function TvshowListItem({tvshow,onClick}) {
 const onClick_=()=>{

    onClick(tvshow);
 };
console.log("tvshowListitem");
console.log(tvshow);


    return (
    <div onClick={onClick_} className={s.container}>
      <img alt={tvshow.name} src={SMALL_IMG_COVER_BASE_URL+tvshow.backdrop_path} />
    <div className={s.title}>
   {tvshow.name}
    </div>
    </div>
  )
}
