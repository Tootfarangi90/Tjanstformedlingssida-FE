import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
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

const [user, setUser] = useState(null)


  return (
    <div className="App">
      <Router>
        <Header title='Header'/>
        <Link to="/login" />
          <div>
            <h1>Snowflake proxy</h1>
            <iframe src="https://snowflake.torproject.org/embed.html" width="320" height="240" frameborder="0" scrolling="no"></iframe>
            <Routes >
              <Route path="/" element={<Home slides={CarouselData} />} />
              <Route path="/register" element={<Register />} />

              {!user && 
              (<Route path="/login" element={<Login auth={() => setUser(true)}/>} /> 
              )}

              {user && (
              <Route path="/dashboard" element={<Dashboard logout={() => setUser(false)}/>} /> 
              )}

              <Route path="/dashboard" element={<Navigate to={user ? "/dashboard" : "/login"}/>} />

              <Route path="*" element={<Navigate to={"/"} />} />

              <Route path="/allcategories" element={<Allcategories />} />
            </Routes>
          </div>
      </Router>
    <Footer />
    </div>
  );
}

export default App;
