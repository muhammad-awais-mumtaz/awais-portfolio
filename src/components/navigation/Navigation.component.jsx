import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import "./Navigation.style.css";

function Navigation() {
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
            <Link className="projects" to="/projects">
              Projects&nbsp;
              <AiOutlineFundProjectionScreen className="project-icon" />
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
