import About from "./assets/components/aboutme/about";
import Contact from "./assets/components/contact/contact";
import Education from "./assets/components/education/education";
import Herosection from "./assets/components/herosection/herosection";
import Navbar from "./assets/components/navbar/navbar";
import Skills from "./assets/components/skills/skills";
import './App.css';
import Project from "./assets/components/projects/project";
import Footer from "./assets/components/footer/footer";
function App() {
  



  return (
    <div>
      <Navbar />
      < Herosection />
      <About />
      <Education />
      <Skills />
      <Project/>
      <Contact />
      <Footer /> 
    </div>
  );
}

export default App;
