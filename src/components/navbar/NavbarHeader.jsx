import { useState, useEffect } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import NavbarLoggedIn from './NavbarLoggedIn'
import NavbarNotLoggedIn from './NavbarNotLoggedIn'

export default function NavbarHeader(user) {
  const [TotalUsers, setTotalUsers] = useState([])

  const get = () => {
    fetch(`${process.env.REACT_APP_API_ADRESS}getusers`)
      .then(response => response.json())
      .then((responseJson) => {
        
        setTotalUsers(responseJson);
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
      if(user.auth){
        console.log(token)
      }
      get();
    }, [user.auth]);

return (
  <div className="header-img">
    <div className="navbar-container">

      <div className="flex-left">
          <Link to="/"><h1>akutraketen</h1></Link>
      </div>
      {!user.auth ? <NavbarNotLoggedIn /> : <NavbarLoggedIn /> }

     
      <section className='flex-right'>
      <p className='text'>{TotalUsers.users} registrerade användare!</p>
    </section>

    </div>
  <div className="searchbar">
      <input className="input-primary" type="text" placeholder='Sök efter tjänst...'/>
      <button className='btn-primary'>Sök</button>
  </div>
  </div>
)
}

