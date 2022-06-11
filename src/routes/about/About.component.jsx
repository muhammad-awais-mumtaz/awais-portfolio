import "./About.style.css";
import MyselfAboutPage from "../../components/myself-about-page/Myself-about-page.component";
import AboutSkillsSection from "../../components/about-skills/About-skills.component";

function About() {
  return (
    <div className="about-page">
      <MyselfAboutPage />
      <AboutSkillsSection />
    </div>
  );
}

export default About;
