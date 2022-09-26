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
import Dashboard from './routes/dashboard/dashboard';
import { CarouselData } from './components/home/CarouselData';
import Allcategories from './routes/categories/Allcategories';







function App() {
  return (
    <div className="App">
    <Header title='Header'/>

    <Router>
     <Link to="/login" />
      <div>
        <h1>Snowflake proxy</h1>
        <iframe src="https://snowflake.torproject.org/embed.html" width="320" height="240" frameborder="0" scrolling="no"></iframe>
        <Routes >
          <Route path="/" element={<Home slides={CarouselData} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/allcategories" element={<Allcategories />} />
        </Routes>
      </div>
    </Router>
<Footer />
    </div>
  );
}

export default App;
