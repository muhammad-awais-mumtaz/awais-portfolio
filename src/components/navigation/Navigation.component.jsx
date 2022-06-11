import "./Navigation.style.css";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavDesktop from "../nav-container-desktop/Nav-container-desktop.component";

function Navigation() {
  return (
    <Fragment>
      <div className="navigation">
        <NavDesktop />
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
