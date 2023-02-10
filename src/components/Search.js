import React ,{useState} from 'react'
import '../css/Search.css'
import Slider from './Slider'
import NavBar from './NavBar'
import ArticleForm from './ArticleForm'
const Search = ({setText}) => {
  const [show, setShow] = useState(false)
  return (

    <div className='TopSearch' >
     <Slider handleText = {setText} handleShow ={setShow} show = {show} />
     <NavBar/>
     {show ? <ArticleForm handleShow={setShow} /> : ""} 
    </div>
  )
}

export default Search
