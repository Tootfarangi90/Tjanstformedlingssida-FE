import { useState, useEffect } from "react";
import "./headerImg.css";


export default function HeaderImg(user) {
  const [TotalUsers, setTotalUsers] = useState([]);

  const get = () => {
    fetch(`${process.env.REACT_APP_API_ADRESS}getusers`)
      .then((response) => response.json())
      .then((responseJson) => {
        setTotalUsers(responseJson);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (user.auth) {
      console.log(token);
    }
    get();
  }, [user.auth]);

  return (
    <div className="header-img">
      <div className="header-content">
        <div className="header-login">
        Nånting
        </div>
        <div className="header-register">
        <p className='text'>{TotalUsers.users} registrerade användare!</p>
        </div>
      </div>
      <div className="searchbar">
        <input
          className="input-primary"
          type="text"
          placeholder="Sök efter tjänst..."
        />
        <button className="btn-primary">Sök</button>
      </div>
    </div>
  );
}
