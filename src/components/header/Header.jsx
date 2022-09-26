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
        <p>Login/Registrera</p>
        <p data-testid='testid'>Meddelanden</p>
        <h3 title='testTitle'>hej</h3>
      </section>
      <section className='droplistContainer'>

      </section>
      <section className='linkContainer'>
        <nav>
          <ul>
            <li><a href="/" className="App-link">Home</a></li>
            <li><a href="/login" className="App-link">Login</a></li>
            <li><a href="/register" className="App-link" >Register</a></li>
            <li><a href="/dashboard" className="App-link">Dashboard</a></li>
            <li><a href="/allcategories" className="App-link">Alla kategorier</a></li>
          </ul>
        </nav>
      </section>
    </div>
  )
}

export default Header