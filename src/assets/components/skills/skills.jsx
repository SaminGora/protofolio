import './skills.css';
import html from '../../../assets/images/html.png';
import php from '../../../assets/images/php.png';
import mysql from '../../../assets/images/mysql.png';
import python from '../../../assets/images/python.jpg';
import mern from "../../../assets/images/mern.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { SiTailwindcss, SiReact, SiNodedotjs, SiMongodb } from 'react-icons/si';

const skills = [
  {
    img: html,
    icon: null,
    title: "HTML, CSS & JS",
    desc: "Build responsive and interactive websites with clean UI, structured layouts, and dynamic client-side functionality.",
    level: 90,
    color: "#f97316",
    tag: "Frontend",
  },
  {
    img: null,
    icon: <SiTailwindcss size={52} color="#38bdf8" />,
    title: "Tailwind CSS",
    desc: "Craft beautiful, modern UIs rapidly using utility-first CSS classes with full responsive control and customization.",
    level: 75,
    color: "#38bdf8",
    tag: "Styling",
  },
  {
    img: php,
    icon: null,
    title: "PHP",
    desc: "Develop server-side logic, handle form submissions, manage sessions, and build secure web applications.",
    level: 80,
    color: "#a78bfa",
    tag: "Backend",
  },
  {
    img: mysql,
    icon: null,
    title: "MySQL",
    desc: "Design and manage relational databases, write optimized queries, and maintain data integrity using foreign keys.",
    level: 75,
    color: "#34d399",
    tag: "Database",
  },
  {
    img: python,
    icon: null,
    title: "Python",
    desc: "Basic experience with Python for scripting, logic building, and understanding backend/programming fundamentals.",
    level: 55,
    color: "#facc15",
    tag: "Language",
  },
  {
    img: mern,
    icon: null,
    title: "MERN Stack",
    desc: "Learning full-stack development with MongoDB, Express, React, and Node.js to build modern web apps.",
    level: 40,
    color: "#60a5fa",
    tag: "Full Stack",
  },
];

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false });
    AOS.refresh();
  }, []);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-header" data-aos="fade-up">
        <span className="skills-badge">Expertise</span>
        <h2 className="skills-title">What I Do</h2>
        <p className="skills-subtitle">
          I design and develop clean, responsive, and user-friendly websites.
          I also build web-based management systems with a focus on
          functionality, performance, and real-world usability.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div
            className="skill-card"
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 80}
            style={{ "--accent": skill.color }}
          >
            <div className="skill-card-top">
              <div className="skill-icon-wrapper">
                {skill.icon ? (
                  skill.icon
                ) : (
                  <img src={skill.img} alt={skill.title} className="skill-img" />
                )}
              </div>
              <span className="skill-tag" style={{ background: skill.color + "22", color: skill.color, border: `1px solid ${skill.color}44` }}>
                {skill.tag}
              </span>
            </div>
            <h3 className="skill-name">{skill.title}</h3>
            <p className="skill-desc">{skill.desc}</p>
            <div className="skill-bar-wrap">
              <div className="skill-bar-label">
                <span>Proficiency</span>
                <span className="skill-pct">{skill.level}%</span>
              </div>
              <div className="skill-bar-track">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%`, background: skill.color }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;