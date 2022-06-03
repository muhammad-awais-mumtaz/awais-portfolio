import ProjectsCards from "../../components/projects-card/Projects-cards.components";
import "./Projects.style.css";

function Projects() {
  const detailsOfProjects = [
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
    { id: 3, name: "Project 3" },
    { id: 4, name: "Project 4" },
  ];
  return (
    <div className="projects-section">
      <h1>What I have coded?</h1>
      <div className="projects-list">
        {detailsOfProjects.map(({ id, name }) => {
          return <ProjectsCards key={id} name={name} className="card" />;
        })}
      </div>
    </div>
  );
}

export default Projects;
