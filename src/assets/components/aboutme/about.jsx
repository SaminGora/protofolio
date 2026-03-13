import samin from '../../../assets/images/IMG_20260103_144935246.jpg';
import './about.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function About(){
    useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration (optional)
        once: false, // Whether animation should only happen once (optional)
      });
      AOS.refresh(); // Used if new elements are added to the DOM dynamically
    }, []);
    return (
      <section className="aboutme" id="about">
        <div className="img" data-aos="fade-up">
          <img src={samin} className="pp"></img>
        </div>

        <div className="desc">
          <div data-aos="fade-down">
            <h2>About Me</h2>
            <hr />
          </div>
          <p>
            I am a motivated Bachelor in Information Management (BIM) student
            with a strong foundation in web development. I have hands-on
            experience building web-based management systems using PHP, MySQL,
            HTML, CSS, and JavaScript. I am currently working on a Student
            Management System as part of my academic project and continuously
            improving my technical and problem-solving skills. My goal is to
            grow as a professional developer and contribute to meaningful
            digital solutions.
          </p>
        </div>
      </section>
    );
}
export default About;