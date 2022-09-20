import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLaptopCode, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import img from './logo.png'




const Header = (title) => {

  

  return (
    <div className="HeaderContainer">
      <section className='logoContainer'>
        <img id="logo" src={img} alt="logo"/>
      </section>
      <section className='dashboardContainer'>
        <FontAwesomeIcon icon={faLaptopCode} />
        <FontAwesomeIcon icon={faEnvelope}/>
      </section>
      <section className='dashBoardTextContainer'>
        <p title='testTitle'>Login/Registrera</p>
        <p data-testid='testid'>Meddelanden</p>
      </section>
      <section className='droplistContainer'>

      </section>
      <section className='linkContainer'>
        <nav>
          <ul>
            <li><a href="/" className="App-link">Home</a></li>
            <li><a href="/login" className="App-link">Login</a></li>
            <li><a href="/register" className="App-link" >Register</a></li>
            <li><a href="#" className="App-link">Skriv er länk</a></li>
            <li><a href="#" className="App-link">Skriv er länk</a></li>
          </ul>
        </nav>
      </section>
    </div>
  )
}

export default Header