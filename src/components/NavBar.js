import React from 'react'
import '../css/Search.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector  } from 'react-redux'

const NavBar = () => {
    const navigate = useNavigate();
    const paraData = useSelector((store) => store.para)
    const jouetsData = useSelector((store) => store.jouets)
    const vetData = useSelector((store) => store.vet)
    
  return (
    <div>   
    <div className='Navi'>
    <hr style={{color:"gray",opacity:"0.2"}}/>
      <ul>
      <Link to={'/listArticles'} state={paraData} onClick={() => navigate('/listArticles')}>
          <li className="menu_list">
            <span className="categ">PARAKIDS</span>
          </li>
        </Link>
        <Link to={'/listArticles'} state={vetData} onClick={() => navigate('/listArticles')}>
          <li className="menu_list">
            <span className="categ">VETEMENTS</span>
          </li>
        </Link>
        <Link to={'/listArticles'} state={jouetsData} onClick={() => navigate('/listArticles')}>
          <li className="menu_list">
            <span className="categ">JOUETS</span>
          </li>
        </Link>
        
   </ul>
   <hr style={{color:"gray",opacity:"0.2"}}/>
    </div>
  
    </div>
  )
}

export default NavBar
