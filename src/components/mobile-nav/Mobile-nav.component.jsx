import "./Mobile-nav.style.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

function MobileNav() {
  const [toggler, setToggler] = useState(false);

  function handleClick() {
    setToggler(!toggler);
  }

  return (
    <div
      className={`mobile-nav-container ${toggler && "background-color-toggle"}`}
    >
      <div className="nav-shown-content">
        <div className="logo-mobile" onClick={handleClick}>
          <Link to={"/"}>
            <h1 className="hover-white">Awais</h1>
          </Link>
        </div>
        <div
          className="hamburger close-open-sign"
          onClick={handleClick}
          style={{ display: toggler && "none" }}
        >
          <GiHamburgerMenu />
        </div>
        <div
          className="close-sign close-open-sign"
          onClick={handleClick}
          style={{ display: !toggler && "none" }}
        >
          <AiOutlineClose />
        </div>
      </div>
      <div
        className={`mobile-nav-links-container ${
          toggler && "background-color-toggle show"
        }`}
      >
        <div className="mobile-nav-links">
          <div onClick={handleClick}>
            <Link className="mobile-projects hover-white" to="/projects">
              Projects
            </Link>
          </div>
          <div onClick={handleClick}>
            <Link className="mobile-about hover-white" to="/about">
              About
            </Link>
          </div>
          <div onClick={handleClick}>
            <Link className="mobile-contact hover-white" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
