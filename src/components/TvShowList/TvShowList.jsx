import React from 'react'
import s from './style.module.css'
import TvshowListItem from '../TvshowListItem/TvshowListItem'
export default function TvShowList({tvshowlist,onClickItem}) {
    console.log(tvshowlist);
  return (
    <div>
    <div className={s.title}>
      you will probaly like
    </div>
    <div className={s.list}>
    <span className={s.tv_show_item}>
        {        
         tvshowlist.map((tvshow)=>{
         return <TvshowListItem tvshow={tvshow} onClick={onClickItem} />
           })
        
         }
          </span>
    </div>
    </div>
  )
}
