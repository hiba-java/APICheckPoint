import React from 'react'
import '../css/Home.css'

const Slider = ({ handleText ,handleShow,show}) => {
  
  return (
    <div className="Slider">
      <img src="https://thumbs.dreamstime.com/z/baby-shop-logo-eps-format-50014897.jpg" alt="logo" />
      <input className='forInputText' type="text" placeholder=" Rechercher.." name="search" onChange={(e) => handleText(e.target.value)} />
     
      <button className='AjoutPara' onClick={() => handleShow(true)}>AjoutArticleBébe</button>
    
  
    </div>
  )
}

export default Slider
