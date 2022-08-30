// import  {useState} from 'react'
// import emailjs from "emailjs-com"

// export default function Footer() {
//   // const [mail, setMail] = useState("")
//   // const [subject, setSubject] = useState("")
//   // const [text, setText] = useState("")



//   return (
//     <footer>
//     <container>
//     <form id='contact-form'> 
//     <input type="hidden" name='contact-number' />
//     <label htmlFor="name"></label>
//     <label>Name</label>
//         <input type="text" name="user_name"/>
//         <label>Email</label>
//         <input type="email" name="user_email"/>
//         <label>Message</label>
//         <textarea name="message"></textarea>
//         <input type="submit" value="Send"></input>
//     </form>
//      <div className="socialContainer">
//      <ul>
//         <li> <a href="Instagram"> Instagram</a> </li>
//         <li> <a href="Instagram"> Instagram</a> </li>
//         <li> <a href="Instagram"> Instagram</a> </li>
//         <li> <a href="Instagram"> Instagram</a> </li>
//         <li> <a href="Instagram"> Instagram</a> </li>
//       </ul>
//      </div>
      
//     </container>
//     </footer>
//   )
// }

import React, { useRef } from "react";
import emailjs, { init } from "@emailjs/browser";
function Footer() {
  
  init("user_xxxxxxxxxxxxxxxxxxx");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_1chwimo", "template_bbsop3q", form.current, "RNuv-F5vEgfSdMZkX").then(
      (result) => {
        alert("Message Sent Successfully");
        console.log(result);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };



  return (
    <div className="container">
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user-name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
    <button type="submit" >Send</button>
    </form> 
    
    </div>
  );
}
export default Footer