import "./Projects-cards.style.css";

function ProjectsCards(props) {
  return (
    <div className="project-card-container">
      <h1>{props.name}</h1>
    </div>
  );
}

export default ProjectsCards;
