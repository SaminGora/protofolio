import './education.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Education() {
    useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration (optional)
        once: false, // Whether animation should only happen once (optional)
      });
      AOS.refresh(); // Used if new elements are added to the DOM dynamically
    }, []);
  return (
    <section className="education" id="education">
      <h2>Education</h2>
      <div className="card">
        <div className="edu-item" data-aos="fade-right">
          <span className="year">2020 – 2022</span>
          <h3>+2 (Higher Secondary)</h3>
          <p>Management(computer science)Stream</p>
          <span className="place">Khwopa Secondary School</span>
        </div>

        <div className="edu-item" data-aos="fade-left">
          <span className="year">2022 – Present</span>
          <h3>Bachelor of Information Management (BIM)</h3>
          <p>7th Semester</p>
          <span className="place">Bhaktaput Multiple Campus</span>
        </div>
      </div>
    </section>
  );
}
export default Education;
