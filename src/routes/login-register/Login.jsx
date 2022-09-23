import React, { useState } from 'react'
import "./login-register.css"
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const emailChanged = (e) => setEmail(e.target.value)
    const passwordChanged = (e) => setPassword(e.target.value)

    let navigate = useNavigate()

    async function loginUser (e) {
      e.preventDefault()

      try {
        const res = await fetch(`${process.env.REACT_APP_API_ADRESS}login`, {
          method: "POST",
          headers: {"Content-type": "application/json"},
          body: JSON.stringify({email, password})
        })
        console.log(res.status)
        const data = await res.json()
        //alert(res.status )

        if (res.status == 200) {
          navigate("/dashboard")
        }

        if (res.status == 401) {
          console.log("Invalid password")
        }

        if (res.status == 404) {
          console.log("Email not found")
        }

      } catch (error) {
        console.log("Error:" + error)
        
      }

    }
    
  return (
    
    <>


    <fieldset>
        <legend>Logga in</legend>
      <div>
        <button id="register" className='button' onClick={() => console.log("Skapa konto!")}>Skapa konto</button>
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
    

        <button 
          type="submit" 
          className='button'>
          Logga in
      </button>
    </form>
</fieldset>

    </>
  )
}

export default Login