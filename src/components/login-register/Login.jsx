import React, { useState } from 'react'
import "./login-register.css"


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState("");

    const emailChanged = (e) => setEmail(e.target.value)
    const passwordChanged = (e) => setPassword(e.target.value)

    async function loginUser (e) {
      e.preventDefault()

      try {
        const res = await fetch("http://localhost:8080/login", {
          method: "POST",
          headers: {"Content-type": "application/json"},
          body: JSON.stringify({email, password})
        })
        console.log(res.status)
        alert(res.status )

        const data = await res.json()
        console.log(data.status)
        alert(data.status)

      } catch (error) {
        console.log("Error:" + error)
        
      }

    }
    

  return (
    
    <>


    <fieldset>
        <legend>Logga in</legend>
      <div>
        <button id="register" className='button' onClick={() => console.log("Skapa konto")}>Skapa konto</button>
      </div>

      <form onSubmit={loginUser}>

            <fieldset>
            <legend>Email</legend>
              <input 
                type="email" 
                name='email' 
                value={email}
                onChange={emailChanged}
                required
                />
                </fieldset>

     
          <fieldset>
          <legend>Lösenord</legend>
             <input 
               type="password" 
               name='password' 
               value={password} 
               placeholder="Lösenord" 
               onChange={passwordChanged}
               required
              />
          </fieldset>
    

        <button type="submit" className='button'>Logga in</button>
    </form>
        </fieldset>

    <p>This is my email: {email}</p>
    <p>This is my password{password}</p>

    </>
  )
}

export default Login