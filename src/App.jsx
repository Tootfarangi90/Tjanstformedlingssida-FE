import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Login from './components/login-register/Login';
import Register from './components/login-register/Register';

const Home = () => {
  return(
    <div className='home-component'>
      <h1>Tillfällig Home component</h1>
      <p>Byt ut den sen</p>
    </div>
  )
}

const Header = () => {
  return(

    <header className='App-header'>
      <nav>
        <ul>
          <li><a href="http://localhost:3000/" className="App-link">Home</a></li>
          <li><a href="http://localhost:3000/login" className="App-link">Login</a></li>
          <li><a href="http://localhost:3000/register" className="App-link" >Register</a></li>
          <li><a href="#" className="App-link">Skriv er länk</a></li>
          <li><a href="#" className="App-link">Skriv er länk</a></li>
        </ul>
      </nav>
      <div>
      <h1>AKUTRAKETEN</h1>
      <p>This is a header</p>
      </div>
    </header>
    )
}

const Footer = () => {
  const [mail, setMail] = useState("")
  const [subject, setSubject] = useState("")
  const [text, setText] = useState("")

return(
  <container>
  <form>
    <input type="email" name="email" placeholder='Email' />
    <input type="text" name="subject" placeholder='Subject' />
    <textarea name="text" id="" cols="30" rows="10"></textarea>

  </form>

 <div className="socialContainer">
 <ul>
    <li> <a href="Instagram"> Instagram</a> </li>
    <li> <a href="Instagram"> Instagram</a> </li>
    <li> <a href="Instagram"> Instagram</a> </li>
    <li> <a href="Instagram"> Instagram</a> </li>
    <li> <a href="Instagram"> Instagram</a> </li>
  </ul>
 </div>
  
</container>
)
}

function App() {
  return (
    <div className="App">
    <Header />

    <Router>
      <div>
        <h1>This is the router</h1>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
<Footer />
    </div>
  );
}

export default App;
