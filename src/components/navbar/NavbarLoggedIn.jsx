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
            <Link to="/dashboard" onClick={() => scrollBy({ top: 700, left: 0, behavior: "smooth" })}> Profil </Link>
          </li>
          <li>
          <Link to="/categories" onClick={() => scrollBy({ top: 700, left: 0, behavior: "smooth" })}> Category </Link>
        </li>
          <li>
            <Link to="/allcategories" onClick={() => scrollBy({ top: 700, left: 0, behavior: "smooth" })}> Kategorier </Link>
          </li>
          <li>
            <Link to="/kontakt" onClick={() => scrollBy({ top: 700, left: 0, behavior: "smooth" })}>Kontakt </Link>
          </li>
        </ul>
      </nav>
      <section className="flex-right">
            <Link to="/" onClick={() => handleLogout()}>Logga ut</Link>
      </section>
    </>
  );
}
