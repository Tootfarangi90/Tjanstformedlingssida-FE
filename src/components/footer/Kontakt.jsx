import {useState} from 'react'
import  "./Footer.css"

function kontakt() {  const [email, setEmail]= useState("")
const [text, setText]= useState("")


let register = (e)=>{
  e.preventDefault()
  console.log("GG")
}
return (
  <div>
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

<button
type="submit" 
onClick={register}
>Send</button> 
</form>
  </div>
)
}

export default kontakt