import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './routes/login-register/Login';
import Register from './routes/login-register/Register';
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";








function App() {
  return (
    <div className="App">
    <Header title='Header'/>
    

    <Router>
     <Link to="/login" />
      <div>
        
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
