import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./login-register.css"

const Register = () => {
    const [firstname, setFirstname]     = useState('')
    const [lastname, setLastname]       = useState('')
    const [email, setEmail]             = useState('')
    const [occupation, setOccupation]   = useState('')
    const [password, setPassword]       = useState('')
    const [message, setMessage]         = useState('')

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
      console.log(res.status)
  

      if (res.status == 400) {
        setMessage(data.message)
        return
      }

      if (res.status == 409){
        setMessage(data.message)
        return
      }

      if(res.status == 200) {
        setMessage(data.message)
        return
      }

    } catch (error) {
      setMessage("Error, try again later")
      console.log(error)
      
    }
   }

  return (


    <>
    <section id="form">

    <form onSubmit={registerUser}>
      <h2>Register</h2>


<div className="input-group">
<p className='messageBox'>{message}</p>

        <input
         type="text" 
         name='firstname' 
         value={firstname} 
         placeholder="firstname"
         onChange={firstnameChanged} 
         />

         </div>

        <input 
        type="text" 
        name='lastname' 
        value={lastname} 
        placeholder="Lastname"
        onChange={lastnameChanged}
        />
<div className="input-group">

        <input 
        type="email" 
        name='email' 
        value={email} 
        placeholder="Email"
        onChange={emailChanged}
        />
        </div>
        <div className="input-group">

        <input 
        type="password" 
        name='password' 
        value={password} 
        placeholder="Password"
        onChange={passwordChanged}
        />

        </div>

        <div className="input-group">
        <input 
        type="text" 
        
        name="occupation" 
        value={occupation} 
        placeholder="occupation"
        onChange={occupationChanged} 
        />
        
        </div>
        <div className="input-group">

          </div>
        <button className='button'>Skapa konto</button>

        <div>
        Har du redan ett konto? <Link to="/login">Logga in här</Link>
        </div>

    </form>
        </section>
    </>
  )
}

export default Register