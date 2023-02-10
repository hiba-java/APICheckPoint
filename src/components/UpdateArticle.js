import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import '../css/updateArticle.css'
import {updatepara } from '../redux/ParaSlice'
import { Link, useNavigate } from 'react-router-dom'

const UpdateArticle = () => {
    const navigate = useNavigate()
   const dispatch = useDispatch()
   const location = useLocation()
   const article = location.state
   const [articleEdit,setArticleEdit] =useState(article)
    return (
       <div className='modal'>
            <div>
            <Link to ={`/`}  onClick={()=>navigate('/')}  >
            <button className='exit' >Exit</button>  
             </Link>

            <h3> Détails Article </h3>
                <label >Titre</label><br></br>
                <input  type="text" id="titre"   name="titre" defaultValue={article.title} className='ForinputArticle' onChange={(e) => setArticleEdit({ ...articleEdit, title: e.target.value })} />
                <br></br>
                <label >Description</label><br></br>
                <textarea id="ldesc" type="text" name="ldesc" defaultValue={article.description} className='ForinputArticle' onChange={(e) => setArticleEdit({ ...articleEdit, description: e.target.value })} />
                <br></br>
                <label >Prix</label> <br></br>
                <input  type="text" id="lprix" name="lprix"  defaultValue={article.price} className='ForinputArticle' onChange={(e) => setArticleEdit({ ...articleEdit, price: e.target.value })} />
                <br></br>
                <label >Catégories</label><br></br>
                <select id="category" name="category" defaultValue={article.category} onChange={(e) => setArticleEdit({ ...articleEdit, category: e.target.value })}>
                    <option value="para" onClick={(e) => setArticleEdit({ ...articleEdit, category: e.target.value })}>Para</option>
                    <option value="vetements" onClick={(e) => setArticleEdit({ ...articleEdit, category: e.target.value })}>VETEMENTS</option>
                    <option value="jouets" onClick={(e) => setArticleEdit({ ...articleEdit, category: e.target.value })}>Jouets</option>
                </select>
                <br></br>
                <label >Image</label>
                <br></br>
                <input  type="text" id="imp" name="imp" className='ForinputArticle' defaultValue={article.photo} onChange={(e) => setArticleEdit({ ...articleEdit, photo: e.target.value })}/>
                <br></br>
                <Link to ={`/`}  onClick={()=>navigate('/')}  >
                <input  id="bt"type="button" defaultValue="Modifier" className='ForinputButt' onClick={() =>{ dispatch(updatepara(articleEdit))}} />
                </Link>
            </div>
            <div>
            <img name="image" src = {article.photo}  alt="image" className='Forimg' />
            </div>
            </div>
  )
}

export default UpdateArticle
