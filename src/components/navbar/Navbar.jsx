import NavbarLoggedIn from "./NavbarLoggedIn";
import NavbarNotLoggedIn from "./NavbarNotLoggedIn";

export default function Navbar(user) {
  return (
   <div className="navbar-container">
    {!user.auth ? <NavbarNotLoggedIn /> : <NavbarLoggedIn />}
   </div>
  )
}
