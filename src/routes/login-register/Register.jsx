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
    <section className="login-div">
    <h1>Registrera dig här</h1>

    <form onSubmit={registerUser}>


<div className='login-form'>
    <p className='messageBox'>{message}</p>

        <input
        className='email-input'
         type="text" 
         name='firstname' 
         value={firstname} 
         placeholder="Förnamn"
         onChange={firstnameChanged} 
         />

         </div>

        <input 
        className='email-input'
        type="text" 
        name='lastname' 
        value={lastname} 
        placeholder="Efternamn"
        onChange={lastnameChanged}
        />

        <div className='login-form'>
          <input type="username" 
          className='email-input'
          name='username' 
          value={username} 
          placeholder="Användarnamn"
          onChange={usernameChanged}
          />

      </div>
      <div className='login-form'>

        <input 
        className='email-input'
        type="email" 
        name='email' 
        value={email} 
        placeholder="Email"
        onChange={emailChanged}
        />
        </div>
        <div className='login-form'>

        <input 
        className='email-input'
        type="password" 
        name='password' 
        value={password} 
        placeholder="Lösenord"
        onChange={passwordChanged}
        />

        </div>

        <button className='login-knapp'>Skapa konto</button>

        <div className='Account'>
        Har du redan ett konto? <Link to="/login">Logga in här</Link>
        </div>

    </form>
</section>
    </>
  )
}

export default Register