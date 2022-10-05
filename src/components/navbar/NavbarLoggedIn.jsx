import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

export default function NavbarLoggedIn({logout}) {
  const handleLogout = () => {

    localStorage.removeItem('accessToken')

    logout()

  }
  return (
    <nav className="flex-middle">
      <ul>
        <li>
          <Link to="/dashboard"> Profil </Link>
        </li>
        <li>
          <Link to="/allcategories"> Kategorier </Link>
        </li>
        <li>
          <Link to="/kontakt">Kontakt </Link>
        </li>
        <li>
          <Link to="/" onClick={() => handleLogout()}>Logga ut</Link>
        </li>
      </ul>
    </nav>
  );
}
