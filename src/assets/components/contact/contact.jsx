import "./contact.css";
import 'react-icons';
import { FaFacebook } from "/node_modules/react-icons/fa";
import { SlSocialLinkedin } from "/node_modules/react-icons/sl";
import { SlSocialInstagram } from "/node_modules/react-icons/sl";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

  
function Contact() {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ws2py6i", "template_9acg75m", form.current, {
        publicKey: "7uj9dkPmweXUN9wK8",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email Sent !");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };
  return (
    <div className="contact-form" id="contact">
      <h2>Contact Me</h2>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Your Name" name="name" required/>
        <input type="text" placeholder="Your Address" name="address" required/>
        <input type="email" placeholder="Your Email" name="email" required/>
        <textarea row="5" placeholder="Your Message" name="message"required></textarea>
        <br />
        <button type="submit">Send</button>
      </form>
      <div className="social-media">
        <a href="https://www.facebook.com/samingora01">
          <FaFacebook className="fb" />
        </a>
        <a href="https://www.instagram.com/sa.min_gora">
          <SlSocialInstagram className="insta" />
        </a>
        <a href="www.linkedin.com/in/samin-gora-b70a61337">
          <SlSocialLinkedin className="linkdin" />
        </a>
      </div>
    </div>
  );
}
export default Contact;
