import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavbarNotLoggedIn() {
  return (
    <nav className="flex-middle">
      <ul>
        <li>
          <Link to="/allcategories"> Kategorier </Link>
        </li>
        <li>
          <Link to="/kontakt">Kontakt </Link>
        </li>
        <li>
          <Link to="/login"> Logga in </Link>
        </li>
      </ul>
    </nav>
  );
}
