import profile from '../../../assets/images/samin.png';
import "./herosection.css";
import {Link} from 'react-scroll';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Herosection(){
    useEffect(() => {
      AOS.init({
        duration: 1500, // Animation duration (optional)
        once: false, // Whether animation should only happen once (optional)
        easing: "ease-out-cubic",
      });
      AOS.refresh(); // Used if new elements are added to the DOM dynamically
    }, []);
    return (
      <div className="herosection" id="intro">
        <div className="introbox" data-aos="zoom-in-right">
          <span className="greet">Hello,</span>
          <span className="introName">
            I'm <span className="name">Samin</span>
            <br />
            Website Designer
          </span>
          <p className="intopara">
            I'm a skilled Web Developer with experience in creating visually{" "}
            <br /> appealing and user friendly websites.
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=gorasamin6@gmail.com&su=Project Inquiry&body=Hi, I'd like to hire you for..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="hirebtn"
              data-aos="zoom-in-down"
              data-aos-delay="100"
            >
              Hire Me
            </button>
          </a>
        </div>
        <div className="profile">
          <img src={profile} className="profileImg" />
        </div>
      </div>
    );
}
export default Herosection;