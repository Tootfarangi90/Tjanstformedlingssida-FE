import React from 'react'

const dashboard = ({logout}) => {

  return (
    <div>

      <h2>Dashboard</h2>

      <p>Välkommen till din profil</p>

      <button onClick={() => logout()}>Logga ut</button>

    </div>
  )
}

export default dashboard