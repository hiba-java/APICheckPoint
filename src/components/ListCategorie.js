import React from 'react'
import '../css/ListCategorie.css'
import Search from './Search'
import Articles from './Articles'

const listCategorie = ({text}) => {
  return (
    <div className ="global">
      <Articles text={text}/>
    </div>
  )
}

export default listCategorie
