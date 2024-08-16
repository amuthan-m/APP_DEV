import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../resources/Contact.css";
// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ke49nmf",
        "template_x0iys47",
        form.current,
        "2QoDRWckklVXVNZ9A"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message successfully sent");

          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="con-form">
        <label>Name</label>
        <input type="text" name="user_name" placeholder="user_name"/>
        <label className="lb2">Email</label>
        <input type="email" name="user_email" placeholder="email"/>
        <label>Message</label>
        <textarea name="message" placeholder="message"/>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
