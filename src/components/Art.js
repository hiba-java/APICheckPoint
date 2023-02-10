import React, { useState } from 'react'
import '../css/Element.css'
import {deletepara } from '../redux/ParaSlice'
import { useDispatch } from 'react-redux'
import {deleteJouet } from '../redux/JouetsSlice'
import {deleteVetement } from '../redux/VetementsSlice'
import { Link, useNavigate } from 'react-router-dom'
import UpdateArticle from './UpdateArticle'

const Art = ({elem}) => {
 const dispatch = useDispatch ()
 const navigate = useNavigate ()
 const [showUp,setShowUp] =useState(false)
  return (
    <div className='designArt' >
    <Link to ={`/UpdateArticle`} state = {elem} onClick={()=>navigate('UpdateArticle')}  >
     <div className='group'>
     <img className="photo" src = {elem.photo}   alt ="photo"/> 
      <button  className ='deleteButton' onClick={()=> elem.category =="para" ? dispatch(deletepara(elem)) :(elem.category =="vetements" ? dispatch(deleteVetement(elem)) : dispatch(deleteJouet(elem))) }>*</button>
     </div>
      <h4>{elem.title}</h4>
      <h4>{elem.price}</h4> 
      </Link>
    </div>
  )
}

export default Art
