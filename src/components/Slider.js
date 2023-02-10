import React, { useState } from 'react'
import '../css/Home.css'
import ArticleForm from './ArticleForm'

const Slider = ({ handleText }) => {
  const [show, setShow] = useState(false)
  return (
    <div className="Slider">
      <img src="https://thumbs.dreamstime.com/z/baby-shop-logo-eps-format-50014897.jpg" alt="logo" />
      <input className='forInputText' type="text" placeholder=" Rechercher.." name="search" onChange={(e) => handleText(e.target.value)} />
      <div className='Addbuttons'>
        <button className='AjoutPara' onClick={() => setShow(true)}>AjoutPara</button>
        <button className='AjoutPara'>AjoutVet</button>
        <button className='AjoutPara'>AjoutJouets</button>
      </div>
      {show ? <ArticleForm handleShow={setShow} /> : ""}
    </div>
  )
}

export default Slider
