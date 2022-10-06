import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

export default function NavbarLoggedIn({ logout }) {
  const handleLogout = () => {
    localStorage.removeItem("accessToken");

    logout();
  };
  return (
    <>
      <div className="flex-left">
        <Link to="/">
          <h1>akutraketen</h1>
        </Link>
      </div>
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
        </ul>
      </nav>
      <section className="flex-right">
            <Link to="/" onClick={() => handleLogout()}>Logga ut</Link>
      </section>
    </>
  );
}
