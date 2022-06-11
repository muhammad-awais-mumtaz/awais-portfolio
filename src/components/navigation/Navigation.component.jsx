import "./Navigation.style.css";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavDesktop from "../nav-container-desktop/Nav-container-desktop.component";
import MobileNav from "../mobile-nav/Mobile-nav.component";

function Navigation() {
  return (
    <Fragment>
      <div className="navigation">
        <NavDesktop />
      </div>
      <MobileNav />
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
