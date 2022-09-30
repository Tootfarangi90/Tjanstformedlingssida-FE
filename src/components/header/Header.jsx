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
      <NavLink to="/home"><img id="logo" src={img} alt="logo"/></NavLink>
      </section>
      
      <section className='dashboardIconContainer'>
        <FontAwesomeIcon icon={faTableCells}/>
        <NavLink className="NavLinkIcon" to="/login"><FontAwesomeIcon icon={faLaptopCode}/></NavLink>
        <NavLink className="NavLinkIcon" to="/register"><FontAwesomeIcon icon={faUsers}/></NavLink>
        <NavLink className="NavLinkIcon" to="/register"><FontAwesomeIcon id='icon2' icon={faEnvelope}/></NavLink>
      </section>
      
      <section className='dashBoardTextContainer'>
        <a>Kategorier</a>
        <NavLink className="NavLinkText" title='testTitle' to="/login">Login</NavLink>
        <NavLink className="NavLinkText" to="/register">Registrera</NavLink>
        <NavLink className="NavLinkText" data-testid='testid' to="/register">Kontakt</NavLink>
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