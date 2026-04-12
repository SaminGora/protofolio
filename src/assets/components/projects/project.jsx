import img1 from "../../../assets/images/image.png";
import img2 from "../../../assets/images/todo.jpg"; 
import "./project.css";
import { FaArrowRight } from "react-icons/fa";

const projectsData = [
  {
    title: "School Management System",
    image: img1,
    features:
      "• Role-based login • Student & teacher management • Result and notice system",
    techStack: "PHP, MySQL, HTML, CSS, JavaScript",
    credentials: "username:abcd password:abc123",
    link: "http://studentmanagement.liveblog365.com/",
  },
  {
    title: "To-Do App",
    image: img2,
    features:
      "Real-time task management, DOM-based CRUD operations, Input validation and sanitization",
    techStack: "JavaScript (ES6+),CSS, HTML5",
    credentials: "No login required (Local State)",
    link: "https://samingora.github.io/To-Do-app/",
  },
  // Add more projects here easily!
];

function Project() {
  return (
    <section className="project" id="projects">
      <div>
        <h1>Projects</h1>

        <div className="projects-container">
          {projectsData.map((item, index) => (
            <div className="projectcard" key={index}>
              <div className="contain">
                <img src={item.image} className="projectImg" alt={item.title} />
                <p>
                  <strong>{item.title}</strong>
                  <br />
                  Features: {item.features}
                  <br />
                  Tech Stack: {item.techStack}
                  {item.credentials && (
                    <>
                      <br />
                      {item.credentials}
                    </>
                  )}
                </p>
                <div className="weblink">
                  <p>view web application</p>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
