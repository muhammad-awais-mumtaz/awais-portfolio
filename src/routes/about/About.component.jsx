import "./About.style.css";
import { DiReact, DiNodejsSmall, DiMongodb } from "react-icons/di";
import { SiExpress, SiFirebase, SiCsswizardry } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { TiHtml5 } from "react-icons/ti";
import MyselfAboutPage from "../../components/myself-about-page/Myself-about-page.component";

function About() {
  return (
    <div className="about-page">
      <MyselfAboutPage />
      <div className="about-skills">
        <h1>Skilled in</h1>
        <div className="skills-icons">
          <div className="skill-link">
            <a href="https://reactjs.org/" target="__blank">
              <DiReact />
            </a>
          </div>
          <div className="skill-link">
            <a href="https://nodejs.org/en/" target="__blank">
              <DiNodejsSmall />
            </a>
          </div>
          <div className="skill-link">
            <a href="https://expressjs.com/" target="__blank">
              <SiExpress />
            </a>
          </div>
          <div className="skill-link">
            <a href="https://www.mongodb.com/" target="__blank">
              <DiMongodb />
            </a>
          </div>
          <div className="skill-link">
            <a href="https://firebase.google.com/" target="__blank">
              <SiFirebase />
            </a>
          </div>
          <div className="skill-link">
            <a href="https://www.w3schools.com/js/DEFAULT.asp" target="__blank">
              <IoLogoJavascript />
            </a>
          </div>
          <div className="skill-link">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="__blank"
            >
              <TiHtml5 />
            </a>
          </div>
          <div className="skill-link">
            <a href="https://www.w3schools.com/Css/" target="__blank">
              <SiCsswizardry />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
