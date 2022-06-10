import { Link } from "react-router-dom";
import "./Home.style.css";

function Home() {
  return (
    <div className="home">
      <div className="home-intro">
        <div className="myself">
          <h1>Awais</h1>
          <p>&lt;Fullstack/&gt; developer Love to solve problems.</p>
        </div>
        <div className="contact-link">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
