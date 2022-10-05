import {useState} from 'react'
import "./kontakt.css"

function kontakt() {  
const [email, setEmail]= useState("")
const [text, setText]= useState("")


let post = async (e)=>{
  e.preventDefault()
  
  try {
      const response = await fetch(`${process.env.REACT_APP_API_ADRESS}messages`,{
          method: "POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            email,
            text
          })
      })
      const data = await response.json()
      console.log(data)
      console.log(response.status)
  } catch (error) {
      
  }
}
return (
  <div className='kontaktmain'>
    
    <section className='kontaktdiv'>
       <a className="kontaktmail" href="mailto:Akutraketen-development@mail.com?subject=Skriv in ditt ämne här!&body=Skriv ditt meddelande till oss här">Kontakta Akutraketens team</a>

    </section>
    
    
    
    
    
    
    
    {/*
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
  <div>

  </div>

<button
type="submit" 
onClick={post}
>Send</button> 
</form>
*/}
  </div>

)
}

export default kontakt