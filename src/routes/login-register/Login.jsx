import React, { useState } from 'react'
import "./login-register.css"
import { useNavigate, Link } from 'react-router-dom'


const Login = ({auth}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
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

        if (res.status == 200) {
          navigate("/dashboard")
          auth()

        } if (res.status == 400) {
          setMessage(data.message)
          return

        } if (res.status == 401) {
          setMessage(data.message)
          return

        } if (res.status == 404) {
          setMessage(data.message)
          return
        }

      } catch (error) {
        setMessage("Error, try again later")
        console.log("Error:" + error)
        return
        
      }

    }
    
  return (

    <>

    <div>
        <h1>Logga in här</h1>

      <form onSubmit={loginUser}>

        <p className='messageBox'>{message}</p>

            <div>
            <legend>Email</legend>
              <input 
                type="email" 
                name='email' 
                value={email}
                onChange={emailChanged}
                placeholder="Email"
                />
                </div>

     
          <div>
          <legend>Lösenord</legend>
             <input 
               type="password" 
               name='password' 
               value={password} 
               placeholder="Lösenord" 
               onChange={passwordChanged}
              />
          </div>
    
      
          <button 
            type="submit" 
            className='button'>
            Logga in
        </button>


        <div className='NoAccount'>
        Har du inget konto? <Link to="/register">Registrera dig här</Link>
        </div>

    </form>
</div>

    </>
  )
}

export default Login