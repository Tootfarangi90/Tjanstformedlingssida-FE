import  {useState} from 'react'

export default function Footer() {
  const [mail, setMail] = useState("")
  const [subject, setSubject] = useState("")
  const [text, setText] = useState("")

  return (
    <footer>
    <container>
      <form>
        <input type="email" name="email" placeholder='Email' />
        <input type="text" name="subject" placeholder='Subject' />
        <textarea name="text" id="" cols="30" rows="10"></textarea>

      </form>

     <div className="socialContainer">
     <ul>
        <li> <a href="Instagram"> Instagram</a> </li>
        <li> <a href="Instagram"> Instagram</a> </li>
        <li> <a href="Instagram"> Instagram</a> </li>
        <li> <a href="Instagram"> Instagram</a> </li>
        <li> <a href="Instagram"> Instagram</a> </li>
      </ul>
     </div>
      
    </container>
    </footer>
  )
}
