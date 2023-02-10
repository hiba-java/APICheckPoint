import React from 'react'

import '../css/Search.css'
import Slider from './Slider'
import NavBar from './NavBar'

const Search = ({setText}) => {
 
  return (

    <div className='TopSearch' >
     <Slider handleText = {setText} />
     <NavBar/>
     
    </div>
  )
}

export default Search
