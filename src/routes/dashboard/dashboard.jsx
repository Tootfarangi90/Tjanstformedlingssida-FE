import React from 'react'
import "./dashboard.css"
import { useNavigate } from 'react-router-dom'

const dashboard = ({logout}) => {

let navigate = useNavigate()

  const handleLogout = () => {

    localStorage.removeItem('accessToken')

    logout()

  }

  const displayServices = () => {

    navigate("/services")

  }

  return (
    <div>

      <h1>Dashboard</h1>

      <p>Välkommen till din profil</p>

      <button onClick={() => displayServices()}>Annonsera din tjänst</button>

      <button onClick={() => handleLogout()}>Logga ut</button>

    </div>
  )
}

export default dashboard