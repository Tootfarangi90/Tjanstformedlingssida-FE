import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useScrollBy } from "react-use-window-scroll";

export default function NavbarNotLoggedIn() {
  const scrollBy = useScrollBy();
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
          <Link to="/allcategories" onClick={() => scrollBy({ top: 700, left: 0, behavior: "smooth" })}> Kategorier </Link>
        </li>
        <li>
          <Link to="/kontakt" onClick={() => scrollBy({ top: 700, left: 0, behavior: "smooth" })}>Kontakt </Link>
        </li>

      </ul>
    </nav>
    <section className="flex-right">
      <Link to="/login" onClick={() => scrollBy({ top: 700, left: 0, behavior: "smooth" })}>Logga in</Link>
    </section>
  </>
  );
}
