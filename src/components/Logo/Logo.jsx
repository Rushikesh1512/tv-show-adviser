import React from 'react'
import s from './module.style.css'
export default function Logo({title,subtitle,img}) {
  return (
    <>
    <div className={s.container}>
     <img className={s.img} src={img}  />
     <div className={s.title}>{title}</div>

    </div>
    <div className={s.subtitle}>
      {subtitle}
    </div>
    </>
  )
}
