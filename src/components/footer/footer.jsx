import React, { useState } from "react";
import "./Footer.css"

function Footer() {
  const [email, setEmail]= useState("")
  const [text, setText]= useState("")
  let register = (e)=>{
    e.preventDefault()
    console.log("GG")
  }




  return (
    <div className="container">

    <div className="lists">
      <ul><h2>info</h2>
      <li><a href="">Shiiiet</a></li>
      <li><a href="">Shiiiet</a></li>
      <li><a href="">Shiiiet</a></li>
      </ul>
      <ul><h2>Tjänster</h2>
      <li>shieet</li>
      <li>shieet</li>
      <li>shieet</li>
      <li>shieet</li>
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
 >Send</button>
     
    </form> 
     */}
    </div>
  );
}
export default Footer