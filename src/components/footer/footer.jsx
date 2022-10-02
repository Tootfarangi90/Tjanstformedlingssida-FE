import "./Footer.css"
import React, { useState } from "react";


function Footer() {
  




  return (
    <div className="container">
      <div className="snowflake">
      <h1>Snowflake proxy</h1>
            <iframe src="https://snowflake.torproject.org/embed.html" width="320" height="240" frameBorder="0" scrolling="no"></iframe>
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