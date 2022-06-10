import { FiExternalLink } from "react-icons/fi";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineVideoCamera,
} from "react-icons/ai";
import "./Projects-cards.style.css";

function ProjectsCards(props) {
  const { name, projectPhoto, description, code, video, project } = props;
  return (
    <div className="project-card-container">
      <div className="project-details">
        <img src={projectPhoto} alt={name} />
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="project-links">
          <div className="code">
            <a href={code} target="_blank" rel="noreferrer">
              code
              <FiExternalLink />
            </a>
          </div>
          <div className="video">
            <a href={video} target="_blank" rel="noreferrer">
              video
              <AiOutlineVideoCamera />
            </a>
          </div>
          <div className="project">
            <a href={project} target="_blank" rel="noreferrer">
              project
              <AiOutlineFundProjectionScreen />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCards;
