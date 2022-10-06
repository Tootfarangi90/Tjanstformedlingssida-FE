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
    <div>

      <h1>Dashboard</h1>


          <p>Välkommen till din profil</p>

          <button onClick={() => navigate("/advertisement")}>Annonsera din tjänst</button>
          <button onClick={() => handleLogout()}>Logga ut</button>

    </div>
  )
}

export default dashboard