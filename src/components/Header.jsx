import React from 'react'
import '../css/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLaptopCode, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import img from './logo.png'
//import img from '../../public/logo.png'

const Header = () => {

  


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
        <p>Meddelanden</p>
      </section>
      <section className='droplistContainer'>

      </section>
      

    </div>
  )
}

export default Header