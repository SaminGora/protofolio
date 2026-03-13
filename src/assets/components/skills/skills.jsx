import './skills.css';
import html from '../../../assets/images/html.png';
import php from '../../../assets/images/php.png';
import mysql from '../../../assets/images/mysql.png';
import python from '../../../assets/images/python.jpg';
import mern from "../../../assets/images/mern.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Skills(){
  useEffect(() => {
    AOS.init({
      duration:1000, // Animation duration (optional)
      once: false, // Whether animation should only happen once (optional)
    });
    AOS.refresh(); // Used if new elements are added to the DOM dynamically
  }, []);
    return (
      <section className="skill" id="skills">
        <div className="skillsdes">
          <h2>What I Do</h2>
          <p className="info">
            I design and develop clean, responsive, and user-friendly websites.
            I also build web-based management systems with a focus on
            functionality, performance, and real-world usability.
          </p>
        </div>
        <div className="boxes">
          <div className="box" data-aos="fade-up">
            <img src={html} className="html" />
            <div>
              <h3>HTML,CSS,JS</h3>
              <p className="skillDetail">
                Build responsive and interactive websites with clean UI,
                structured layouts, and dynamic client-side functionality.
              </p>
            </div>
          </div>
          <div className="box" data-aos="fade-up">
            <img src={php} className="php" />
            <div>
              <h3>PHP</h3>
              <p className="skillDetail">
                Develop server-side logic, handle form submissions, manage
                sessions, and build secure web applications.
              </p>
            </div>
          </div>
          <div className="box" data-aos="fade-up">
            <img src={mysql} className="mysql" />
            <div>
              <h3>Mysql</h3>
              <p className="skillDetail">
                Design and manage relational databases, write optimized queries,
                and maintain data integrity using foreign keys.
              </p>
            </div>
          </div>
          <div className="box" data-aos="fade-up">
            <img src={python} className="python" />
            <div>
              <h3>Python</h3>
              <p className="skillDetail">
                Basic experience with Python for scripting, logic building, and
                understanding backend/programming fundamentals.
              </p>
            </div>
          </div>
          <div className="box" data-aos="fade-up">
            <img src={mern} className="python" />
            <div>
              <h3>MERN</h3>
              <p className="skillDetail">
               Learning....
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Skills;