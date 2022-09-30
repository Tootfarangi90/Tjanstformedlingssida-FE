import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faUser, faTableCells, faLaptopCode, faUsers} from '@fortawesome/free-solid-svg-icons'
import img from './logo.png'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'




const Header = (user) => {

console.log(user.auth)
  useEffect(() => {
    get();
  }, []);

  const [users, setUsers] = useState([])
  


  const get = () => {
  
    fetch(`${process.env.REACT_APP_API_ADRESS}getusers`)
      .then(response => response.json())
      .then((responseJson) => {
        
        setUsers(responseJson)
      })
      .catch(error => {
        console.log(error)
      })
  }


  return (
    <div className="HeaderContainer">

      <section className='logoContainer'>
      <NavLink to="/home"><img id="logo" src={img} alt="logo"/></NavLink>
      </section>
      
      <section className='dashboardIconContainer'>
        
        {!user.auth && 
          <>
            <FontAwesomeIcon id='categoriesIconNotLoggedIn' icon={faTableCells}/>
            <NavLink id='loginIcon' className="NavLinkIcon" to="/login"><FontAwesomeIcon icon={faLaptopCode}/></NavLink>
            <NavLink id='registrationIcon' className="NavLinkIcon" to="/register"><FontAwesomeIcon icon={faUsers}/></NavLink>
          </>
        }
        {user.auth &&
            <>
              <FontAwesomeIcon id='categoriesIconLoggedIn' icon={faTableCells}/>
              <NavLink id='profileIcon' className="NavLinkIcon" to="/dashboard"><FontAwesomeIcon icon={faUser}/></NavLink>
            </>
        }
        <FontAwesomeIcon className="NavLinkIcon" icon={faEnvelope}/>
      </section>
      
      <section className='dashBoardTextContainer'>
        <a>Kategorier</a>
        {!user.auth &&
          <>
            <NavLink className="NavLinkText" title='testTitle' to="/login">Login</NavLink>
            <NavLink className="NavLinkText" data-testid='testid' to="/register">Registrera</NavLink>
          </>
        }
        {user.auth && 
          <NavLink className="NavLinkText" to="/dashboard">Profil</NavLink>
        }
        <a>Kontakt</a>
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