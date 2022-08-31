import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/login-register/Login';
import Register from './components/login-register/Register';
import Footer from "./components/footer/footer"
import Header from "./components/header/Header"





const Home = () => {
  return(
    <div className='home-component'>
      <h1>Tillfällig Home component</h1>
      <p>Byt ut den sen</p>
    </div>
  )
}



// const Footer = () => {
//   const [mail, setMail] = useState("")
//   const [subject, setSubject] = useState("")
//   const [text, setText] = useState("")

// return(
//   <container>
//   <form>
//     <input type="email" name="email" placeholder='Email' />
//     <input type="text" name="subject" placeholder='Subject' />
//     <textarea name="text" id="" cols="30" rows="10"></textarea>

//   </form>

//  <div className="socialContainer">
//  <ul>
//     <li> <a href="Instagram"> Instagram</a> </li>
//     <li> <a href="Instagram"> Instagram</a> </li>
//     <li> <a href="Instagram"> Instagram</a> </li>
//     <li> <a href="Instagram"> Instagram</a> </li>
//     <li> <a href="Instagram"> Instagram</a> </li>
//   </ul>
//  </div>
  
// </container>
// )
// }

function App() {
  return (
    <div className="App">
    <Header />
{/* 
    <Router>
      <div>
        <h1>This is the router</h1>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router> */}
<Footer />
    </div>
  );
}

export default App;
