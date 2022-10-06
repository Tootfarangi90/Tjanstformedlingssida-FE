import React from 'react'
import "./dashboard.css"
import { useNavigate } from 'react-router-dom'

const dashboard = ({logout}) => {

  const navigate = useNavigate()


  const handleLogout = () => {

    localStorage.removeItem('accessToken')

    logout()

  }

  return (
    <div className='dashboard-div'>

      <h1 className='dashboard-title'>Dashboard</h1>


          <p className='welcome-title'>Välkommen till din profil</p>

          <button className='user-btn' onClick={() => navigate("/advertisement")}>Annonsera din tjänst</button>
          <button className='user-btn' onClick={() => handleLogout()}>Logga ut</button>

    </div>
  )
}

export default dashboard