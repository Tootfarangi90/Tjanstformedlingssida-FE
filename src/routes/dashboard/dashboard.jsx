import React from 'react'
import "./dashboard.css"

const dashboard = ({logout}) => {

  return (
    <div>

      <h1>Dashboard</h1>

      <p>Välkommen till din profil</p>

      <button onClick={() => logout()}>Logga ut</button>

    </div>
  )
}

export default dashboard