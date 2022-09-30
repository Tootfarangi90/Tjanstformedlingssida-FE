import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLaptopCode, faEnvelope, faUsers} from '@fortawesome/free-solid-svg-icons'
import img from './logo.png'
import { Link, NavLink } from 'react-router-dom'
import { useEffect } from 'react'




const Header = (title) => {



  return (
    <div className="HeaderContainer">
      <section className='logoContainer'>
      <Link to="/home"><img id="logo" src={img} alt="logo"/></Link>
      </section>
      <section className='dashboardIconContainer'>
        <Link className="NavLinkText" to="/login"><FontAwesomeIcon icon={faLaptopCode}/></Link>
        <Link className="NavLinkText" to="/register"><FontAwesomeIcon icon={faUsers}/></Link>
        <Link className="NavLinkText" to="/register"><FontAwesomeIcon id='icon2' icon={faEnvelope}/></Link>
      </section>
      <section className='dashBoardTextContainer'>
        <Link className="NavLinkText" title='testTitle' to="/login">Login</Link>
        <Link className="NavLinkText" to="/register">Registrera</Link>
        <Link className="NavLinkText" data-testid='testid' to="/register">Meddelanden</Link>
      </section>
      <section className='droplistContainer'>

      </section>
      <section className='linkContainer'>
        <nav>
          <ul>
            <li><Link to="/dashboard" className="App-link">Dashboard</Link></li>
            <li><Link to="/allcategories" className="App-link">Alla kategorier</Link></li>
          </ul>
        </nav>
      </section>
    </div>
  )
}

export default Header