import React, { useState } from "react";

function Footer() {
  const [email, setEmail]= useState("")
  const [text, setText]= useState("")
  console.log(email)
  console.log(text)
  return (
    <div className="container">
      <form className="form">
     
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

<button type="submit" >Send</button>
     
    </form> 
    
    </div>
  );
}
export default Footer