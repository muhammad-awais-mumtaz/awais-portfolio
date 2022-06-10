import { Fragment, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaRegGrinBeam } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import "./Navigation.style.css";

function Navigation() {
  const [projectIconToggler, setProjectIconToggler] = useState(false);
  const [aboutIconToggler, setAboutIconToggler] = useState(false);
  const [contactIconToggler, setContactIconToggler] = useState(false);

  return (
    <Fragment>
      <div className="navigation">
        <div className="nav-container">
          <div className="logo">
            <Link to={"/"}>
              <h1>Awais</h1>
            </Link>
          </div>
          <div className="nav-links">
            <Link
              className="projects"
              to="/projects"
              onMouseEnter={() => setProjectIconToggler(true)}
              onMouseLeave={() => setProjectIconToggler(false)}
            >
              Projects&nbsp;
              <AiOutlineFundProjectionScreen
                className="project-icon"
                style={{
                  transform: projectIconToggler ? "rotate(360deg)" : "",
                  transition: "transform 1s ease",
                }}
              />
            </Link>
            <Link
              className="about"
              to="/about"
              onMouseEnter={() => setAboutIconToggler(true)}
              onMouseLeave={() => setAboutIconToggler(false)}
            >
              About&nbsp;
              <FaRegGrinBeam
                className="project-icon"
                style={{
                  transform: aboutIconToggler ? "rotate(360deg)" : "",
                  transition: "transform 1s ease",
                }}
              />
            </Link>
            <Link
              className="contact-link-nav"
              to="/contact"
              onMouseEnter={() => setContactIconToggler(true)}
              onMouseLeave={() => setContactIconToggler(false)}
            >
              Contact&nbsp;
              <MdOutlineContactSupport
                className="contact-icon"
                style={{
                  transform: contactIconToggler ? "rotate(360deg)" : "",
                  transition: "transform 1s ease",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
