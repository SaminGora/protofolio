import img from '../../../assets/images/image.png';
import './project.css';
import { FaArrowRight } from "react-icons/fa";
function Project() {
    return (
      <section className="project" id="projects">
        <div>
          <h1>Projects</h1>

          <div className="projectcard">
            <div className="contain">
              <img src={img} className="projectImg" />
              <p>
                School Management System
                <br />
                Features: • Role-based login • Student & teacher management •
                Result and notice system Tech Stack: PHP, MySQL, HTML, CSS,
                JavaScript
              </p>
              <div className='weblink'>
                <p>view web application</p>
                <a href="http://studentmanagement.liveblog365.com/">
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Project;