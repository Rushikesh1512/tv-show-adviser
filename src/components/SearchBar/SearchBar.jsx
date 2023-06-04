import React from 'react'
import s from './style.module.css'
import {Search as SearchIcon} from "react-bootstrap-icons"
export default function SearchBar({onSubmit}) {

    function submitSearch(e){
    if(e.key==="Enter"){
        onSubmit(e.target.value);

    }
 }
  return (

    <>
      <SearchIcon size={27} className={s.icon} />
      <input 
      onKeyUp={submitSearch}
      type="text"
      placeholder={"search a tv show"}
      className={s.input} />
    </>
  )
}
