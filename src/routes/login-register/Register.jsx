import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./login-register.css"

const Register = () => {
    const [firstname, setFirstname]     = useState('')
    const [lastname, setLastname]       = useState('')
    const [email, setEmail]             = useState('')
    const [username, setUsername]   = useState('')
    const [password, setPassword]       = useState('')
    const [message, setMessage]         = useState('')

    const firstnameChanged  = (e) => setFirstname(e.target.value)
    const lastnameChanged   = (e) => setLastname(e.target.value)
    const emailChanged      = (e) => setEmail(e.target.value)
    const passwordChanged   = (e) => setPassword(e.target.value)
    const usernameChanged = (e) => setUsername(e.target.value)


   async function registerUser(e) {
    e.preventDefault()
    
    try {
      const res = await fetch(`${process.env.REACT_APP_API_ADRESS}register`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          firstname, 
          lastname, 
          username,
          email, 
          password
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
    <h1>Registrera dig här</h1>

    <form onSubmit={registerUser}>


<div className="input-group">
    <p className='messageBox'>{message}</p>

        <input
         type="text" 
         name='firstname' 
         value={firstname} 
         placeholder="Förnamn"
         onChange={firstnameChanged} 
         />

         </div>

        <input 
        type="text" 
        name='lastname' 
        value={lastname} 
        placeholder="Efternamn"
        onChange={lastnameChanged}
        />

        <div className="input-group">
          <input type="username" 
          name='username' 
          value={username} 
          placeholder="Användarnamn"
          onChange={usernameChanged}
          />

      </div>
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
        placeholder="Lösenord"
        onChange={passwordChanged}
        />

        </div>

        <button className='button'>Skapa konto</button>

        <div className='Account'>
        Har du redan ett konto? <Link to="/login">Logga in här</Link>
        </div>

    </form>
</section>
    </>
  )
}

export default Register