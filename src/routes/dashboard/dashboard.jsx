import React from 'react'
import "./dashboard.css"

const dashboard = ({logout}) => {

  const handleLogout = () => {

    localStorage.removeItem('accessToken')

    logout()

  }
 
  return (
    <div>

      <h1>Dashboard</h1>

      <p>Välkommen till din profil</p>

      <button onClick={() => handleLogout()}>Logga ut</button>

    </div>
  )
}

export default dashboard