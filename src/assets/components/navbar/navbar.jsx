import logo from "../../../assets/images/logo.png";
import { Link } from "react-scroll";
import "./navbar.css";
import { MdOutlineMenu } from "/node_modules/react-icons/md";
import { useState } from "react";
function Navbar() {
  const [menu, setmenu] = useState(false);
  const menuhandle = () => {
    setmenu(!menu);
  };
  return (
    <>
      <nav className="navbar">
        <img src={logo} className="logo" />
        <div className="navlinks ">
          <Link
            className="navItems"
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={() => setmenu(false)}
          >
            Home
          </Link>
          <Link
            className="navItems"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
            onClick={() => setmenu(false)}
          >
            About
          </Link>
          <Link
            className="navItems"
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={() => setmenu(false)}
          >
            Education
          </Link>
          <Link
            className="navItems"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={() => setmenu(false)}
          >
            Skills
          </Link>
          <Link
            className="navItems"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={() => setmenu(false)}
          >
            Projects
          </Link>
        </div>
        <button
          className="contactbtn"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
            setmenu(false);
          }}
        >
          Contact Me
        </button>

        <div className="menu">
          <MdOutlineMenu onClick={menuhandle} />
        </div>
{/* mobile menu */}
        <div className="mobileMenu" style={{ display: menu ? "flex" : "none" }}>
          <Link
            className="navItems"
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={() => setmenu(false)}
          >
            Home
          </Link>
          <Link
            className="navItems"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={() => setmenu(false)}
          >
            About
          </Link>
          <Link
            className="navItems"
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={() => setmenu(false)}
          >
            Education
          </Link>
          <Link
            className="navItems"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={() => setmenu(false)}
          >
            Skills
          </Link>
          <Link
            className="navItems"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={() => setmenu(false)}
          >
            Projects
          </Link>
          <button
            className="menuContactbtn"
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
              setmenu(false);
            }}
          >
            Contact Me
          </button>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
