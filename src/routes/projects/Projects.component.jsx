import ProjectsCards from "../../components/projects-card/Projects-cards.components";
import "./Projects.style.css";

function Projects() {
  const detailsOfProjects = [
    { id: 1, name: "Project 1" },
    { id: 1, name: "Project 2" },
    { id: 1, name: "Project 3" },
    { id: 1, name: "Project 4" },
  ];
  return (
    <div className="projects-section">
      <h1>What I have coded?</h1>
      {detailsOfProjects.map(({ id, name }) => {
        return <ProjectsCards key={id} name={name} className="card" />;
      })}
    </div>
  );
}

export default Projects;
