import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPara } from '../redux/ParaSlice'
import '../css/ArticleForm.css'
import { Link, useNavigate } from 'react-router-dom'
import { addVetement } from '../redux/VetementsSlice'
import { addJouet } from '../redux/JouetsSlice'


const ArticleForm = ({ handleShow }) => {
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const [article, setArticle] = useState({ title: "", description: "", price: "", category: "para", photo: "" })
    return (
        <div className='modal'>
         
            <div>
            <button className='exit' onClick={() => handleShow(false)}>Exit</button>
            <h3>Ajout nouvel article </h3>
                <label >Titre</label><br></br>
                <input type="text" id="titre" name="titre" placeholder="Titre.." className='ForinputArticle' onChange={(e) => setArticle({ ...article, title: e.target.value })} />
                <br></br>
                <label >Description</label><br></br>
                <input type="text" id="ldesc" name="ldesc" placeholder="Description.." className='ForinputArticle' onChange={(e) => setArticle({ ...article, description: e.target.value })} />
                <br></br>
                <label >Prix</label><br></br>
                <input type="text" id="lprix" name="lprix" placeholder="Prix.." className='ForinputArticle' onChange={(e) => setArticle({ ...article, price: e.target.value })} />
                <br></br>
                <label >Catégories</label><br></br>
                <select id="category" name="category" onChange={(e) => setArticle({ ...article, category: e.target.value })}>
                    <option value="para" onClick={(e) => setArticle({ ...article, category: e.target.value })}>Para</option>
                    <option value="vetements" onClick={(e) => setArticle({ ...article, category: e.target.value })}>VETEMENTS</option>
                    <option value="jouets" onClick={(e) => setArticle({ ...article, category: e.target.value })}>Jouets</option>
                </select>
                <br></br>
                <label >Image</label><br></br>
                <input type="text" id="limg" name="image" placeholder="Image..." className='ForinputArticle' onChange={(e) => setArticle({ ...article, photo: e.target.value })} />
                <br></br>
                <Link to ={`/`}  onClick={()=>navigate('/')}  >
                <input type="button" value="Ajouter" className='ForinputButt' onClick={() =>{dispatch(article.category==="para" ? (
                    addPara({ ...article, id: Math.floor(Math.random() * 100000) })):
                    (article.category==="vetements" ? addVetement({ ...article, id: Math.floor(Math.random() * 100000) }):
                     addJouet({ ...article, id: Math.floor(Math.random() * 100000) }) 
                                                       
                    ));
                 
                navigate("/") ;handleShow(false) ; } }/>
            </Link>
            </div>
        </div>

    )
}

export default ArticleForm
