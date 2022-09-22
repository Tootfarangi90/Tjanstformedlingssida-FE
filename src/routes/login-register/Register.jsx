import React, { useState } from 'react'
import "./login-register.css"

const Register = () => {
    const [firstname, setFirstname]     = useState('')
    const [lastname, setLastname]       = useState('')
    const [email, setEmail]             = useState('')
    const [occupation, setOccupation]   = useState('')
    const [password, setPassword]       = useState('')




    const firstnameChanged  = (e) => setFirstname(e.target.value)
    const lastnameChanged   = (e) => setLastname(e.target.value)
    const emailChanged      = (e) => setEmail(e.target.value)
    const passwordChanged   = (e) => setPassword(e.target.value)
    const occupationChanged = (e) => setOccupation(e.target.value)



   async function registerUser(e) {
    e.preventDefault()
    
    try {
      const res = await fetch(`${process.env.REACT_APP_API_ADRESS}register`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          firstname, 
          lastname, 
          email, 
          password, 
          occupation
        })
      })
      
      const data = await res.json()
      console.log(data.status)
      console.log(data)

      if (data.status === 400) {
        console.log(data.message)
        return
      }

      if (data.status === 409){
        console.log(data.message)
        return
      }

      if(data.status === 200) {
        console.log(data)
        alert("Welcome")
        return
      }
    } catch (error) {
      console.log(error)
      
    }
   }

  return (


    <>
    <section id="form">
    <div id="toggle-form">
        <button id="login" className='button' onClick={() => console.log("Hello World")}>Logga in</button>
      </div>

    <form onSubmit={registerUser}>
      <h4>Register</h4>

<div className="input-group">

        <input
         type="text" 
         name='firstname' 
         value={firstname} 
         placeholder="firstname"
         onChange={firstnameChanged} 
         required={true}
         />

         </div>

        <input 
        type="text" 
        name='lastname' 
        value={lastname} 
        placeholder="Lastname"
        onChange={lastnameChanged}
        required={true} 
        />
<div className="input-group">

        <input 
        type="email" 
        name='email' 
        value={email} 
        placeholder="Email"
        onChange={emailChanged}
        required={true}  
        />
        </div>
        <div className="input-group">

        <input 
        type="password" 
        name='password' 
        value={password} 
        placeholder="Password"
        onChange={passwordChanged}
        required={true} 
        />

        </div>

        <div className="input-group">
        <input 
        type="text" 
        
        name="occupation" 
        value={occupation} 
        placeholder="occupation"
        onChange={occupationChanged}
        required={true}  
        />
        
        </div>
        <div className="input-group">

          </div>
        <button className='button'>Skapa konto</button>
    </form>
        </section>
    </>
  )
}

export default Register