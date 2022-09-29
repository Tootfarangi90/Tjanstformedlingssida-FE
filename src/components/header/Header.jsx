import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faHouse, faUser, faTableCells} from '@fortawesome/free-solid-svg-icons'
import img from './logo.png'




const Header = () => {

  

  return (
    <div className="HeaderContainer">

      <section className='logoContainer'>
        <img id="logo" src={img} alt="logo"/>
      </section>

      <section className='dashboardContainer'>
        <a href="/"><FontAwesomeIcon icon={faHouse} /></a>
        <a href="/login"><FontAwesomeIcon icon={faUser} /></a>
        </section>

      <section className='dashBoardTextContainer'>
        <a href="/">Hem</a>
        <a href="/login">Konto</a>
      </section>

      <section className='linkContainer'>
        <a href="/allcategories"><FontAwesomeIcon icon={faTableCells} /></a>
        <a href="/"><FontAwesomeIcon icon={faEnvelope} /></a>
      </section>

      <section className='linkTextContainer'>
        <a href="/allcategories">Kategorier</a>
        <a href="/">Kontakt</a>
      </section>

      <p data-testid='testid'>Meddelanden</p>
      <h3 title='testTitle'>hej</h3>

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