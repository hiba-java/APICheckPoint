import React from 'react'
import'../css/Articles.css'
import { useSelector  } from 'react-redux'
import {  useLocation } from 'react-router-dom'
import Art from './Art'

const Articles = ({text}) => {
  const location=useLocation()
  const paraData = useSelector((store) => store.para)
  const data=location.state || paraData
    return (
    <div className="deArticles">
      {data.filter(el=>el.title.toLowerCase().includes(text.toLowerCase())). map((element,i)=><Art key={i} elem ={element}/>)}
    </div>
  )
}

export default Articles
