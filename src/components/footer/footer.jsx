import "./Footer.css"
import React, { useState } from "react";


function Footer() {
  




  return (
    <div className="footer-container">
      <div className="snowflake">

      </div>
    <div className="lists">
      <ul><h2>info</h2>
      <li><a href="">Hur fungerar det</a></li>
      <li><a href="">FAQ</a></li>
      <li><a href="">Nyheter</a></li>
      </ul>
     
      <ul><h2>Kontakt</h2>
      <li><a href="">Facebook</a></li>
      <li><a href="">Instagram</a></li>
      <li><a href="">Twitch</a></li>
      
      </ul>
    </div>

  

      {/* <form className="form">
     
     <input type="email"
      name="email" 
      required 
      placeholder="Email" 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />

    <div className="textbox">
    <textarea 
    name="message" 
    placeholder="Skriv något"
    value={text}
    onChange={(e)=> setText(e.target.value)}
    
    
    />
    </div>

<button
 type="submit" 
 onClick={register}
 >Send</button> */}


    </div>
  );
}
export default Footer