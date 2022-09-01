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