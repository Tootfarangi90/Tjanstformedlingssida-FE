import React, { useState } from 'react'
import "./login-register.css"

const Register = () => {
    const [firstname, setFirstname]     = useState('')
    const [lastname, setLastname]       = useState('')
    const [email, setEmail]             = useState('')
    const [birthday, setBirthday]       = useState('')
    const [occupation, setOccupation]   = useState('')
    const [password, setPassword]       = useState('')
    const [password2, setPassword2]     = useState('')
    const [error, setError]             = useState('')

    const firstnameChanged  = (e) => setFirstname(e.target.value)
    const lastnameChanged   = (e) => setLastname(e.target.value)
    const emailChanged      = (e) => setEmail(e.target.value)
    const passwordChanged   = (e) => setPassword(e.target.value)
    const password2Changed  = (e) => setPassword2(e.target.value)
    const occupationChanged = (e) => setOccupation(e.target.value)
    const birthdayChanged   = (e) => setBirthday(e.target.value)


   async function registerUser(e) {
    e.preventDefault()
    
    try {
      const res = await fetch("http://localhost:8080/register", {

        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({email, password})
      })
      
      const data = await res.json()
      console.log(data.status)
      console.log(data)
      
      if(data.status === 200) {
        console.log(data.users)
        alert("Welcome")
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


        <input
         type="text" 
         name='firstname' 
         value={firstname} 
         placeholder="firstname"
         onChange={firstnameChanged} 
         />


        <input 
        type="text" 
        name='lastname' 
        value={lastname} 
        placeholder="Lastname"
        onChange={lastnameChanged}  
        />

        <input 
        type="email" 
        name='email' 
        value={email} 
        placeholder="Email"
        onChange={emailChanged}  
        />

        <input 
        type="password" 
        name='password' 
        value={password} 
        placeholder="Password"
        onChange={passwordChanged }  
        />

        <input 
        type="password" 
        name='password2' 
        value={password2} 
        placeholder="Confirm password"
        onChange={password2Changed}  
        />

        <input 
        type="text" 
        name="occupation" 
        value={occupation} 
        placeholder="occupation"
        onChange={occupationChanged}  
        />
        
        <input 
        type="date" 
        value={birthday} 
        onChange={birthdayChanged} 
        step="1" 
        placeholder=''/>
        <button className='button'>Skapa konto</button>
    </form>
        </section>

    <p>Firstname: {firstname}</p>
    <p>LastName: {lastname}</p>
    <p>Email: {email}</p>
    <p>Occupation: {occupation}</p>
    <p>Password: {password}</p>
    <p>Password2: {password2}</p>
    <p>Birthday: {birthday}</p>
    </>
  )
}

export default Register