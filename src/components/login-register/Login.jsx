import React, { useState } from 'react'
import "./login-register.css"


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState("");

    const emailChanged = (e) => setEmail(e.target.value)
    const passwordChanged = (e) => setPassword(e.target.value)

    const onSubmit = (e) => {
        setEmail(email)
        setPassword(password)
    }
    

  return (
    <>

     <label class="custom-field" aria-label="Enter Email">
     
        <input type="email" placeholder="email@mail.com" required/>
        <span class="error-message" aria-live="polite"></span>
     </label>

    <sektion id="form">

      <div id="toggle-form">
        <button id="register" className='button' onClick={() => console.log("Hello World")}>Skapa konto</button>

      </div>


      <form onSubmit={onSubmit}>
        <h4>Välkommen tillbaka!</h4>
          <div className="input-field">
            <label for="email" className='form_label'>Email</label>
              <input 
                type="email" 
                name='email' 
                value={email} 
                placeholder="&nbsp;"
                onChange={emailChanged}
                required={true}
              />
          </div>
     
          <div className="input-field">
            <label for="password" className='form_label'></label>
             <input 
               type="password" 
               name='password' 
               value={password} 
               placeholder="Lösenord" 
               onChange={passwordChanged}
               required={true}
              />
              <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
          </div>
    

        <button className='button'>Logga in</button>
    </form>
        </sektion>

    <p>This is my email: {email}</p>
    <p>This is my password{password}</p>

    <div>

</div>
    </>
  )
}

export default Login