import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faUser, faTableCells, faLaptopCode, faUsers} from '@fortawesome/free-solid-svg-icons'
import img from './logo.png'
import { Link, NavLink } from 'react-router-dom'
import { useEffect } from 'react'




const Header = () => {



  return (
    <div className="HeaderContainer">

      <section className='logoContainer'>
      <Link to="/home"><img id="logo" src={img} alt="logo"/></Link>
      </section>
      
      <section className='dashboardIconContainer'>
        <FontAwesomeIcon icon={faTableCells}/>
        <Link className="LinkIcon" to="/login"><FontAwesomeIcon icon={faLaptopCode}/></Link>
        <Link className="LinkIcon" to="/register"><FontAwesomeIcon icon={faUsers}/></Link>
        <Link className="LinkIcon" to="/register"><FontAwesomeIcon id='icon2' icon={faEnvelope}/></Link>
      </section>
      
      <section className='dashBoardTextContainer'>
        <a>Kategorier</a>
        <Link className="LinkText" title='testTitle' to="/login">Login</Link>
        <Link className="LinkText" to="/register">Registrera</Link>
        <Link className="LinkText" data-testid='testid' to="/register">Kontakt</Link>
      </section>
      
      <section className='search'>
        <input
         type="text" 
         name='search' 
         placeholder="Sök tjänst här..." 
         />
        <button className='searchBtn'>SÖK</button>
      </section>

    </div>
  )

}

export default Header