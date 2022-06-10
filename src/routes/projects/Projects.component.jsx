import ProjectsCards from "../../components/projects-card/Projects-cards.components";
import "./Projects.style.css";

function Projects() {
  const detailsOfProjects = [
    {
      id: 1,
      name: "TinDog",
      videoLink: "https://www.youtube.com/watch?v=ukbTHaAPtTs",
      photoLink:
        "https://raw.githubusercontent.com/muhammad-awais-mumtaz/tindog/main/images/mokeup.jpg",
      codeLink: "https://github.com/muhammad-awais-mumtaz/tindog",
      projectLink: "https://muhammad-awais-mumtaz.github.io/tindog/",
      descriptionOfProject:
        "I have used html, css and bootstrap to build this site. This looks like tinder😁.",
    },
    {
      id: 2,
      name: "Simple Blog",
      videoLink: "https://www.youtube.com/watch?v=_sUAhaU6vY8",
      photoLink:
        "https://raw.githubusercontent.com/muhammad-awais-mumtaz/simple-blog/main/public/css/home%20of%20bloging%20website.JPG",
      codeLink: "https://github.com/muhammad-awais-mumtaz/simple-blog",
      projectLink: "https://blooming-river-75323.herokuapp.com/",
      descriptionOfProject:
        "I have used html, css, bootstrap, javascript, mongodb and many more things to build this. ",
    },
    {
      id: 3,
      name: "Drum kit",
      videoLink: "https://www.youtube.com/watch?v=d737cs1rEz4",
      photoLink:
        "https://raw.githubusercontent.com/muhammad-awais-mumtaz/drum-kit/master/images/webimg.JPG",
      codeLink: "https://github.com/muhammad-awais-mumtaz/drum-kit",
      projectLink: "https://muhammad-awais-mumtaz.github.io/drum-kit/",
      descriptionOfProject:
        "I have used I have used html, css and vanilla javascript to build that cool😎 project. ",
    },
    {
      id: 4,
      name: "e-commerce store",
      photoLink:
        "https://live.staticflickr.com/65535/52135650049_c26d7e9576_k.jpg",

      descriptionOfProject: "Coming Soon...",
    },
  ];
  return (
    <div className="projects-page">
      <div className="projects-section">
        <h1>What I have coded?</h1>
        <div className="projects-list">
          {detailsOfProjects.map(
            ({
              id,
              name,
              photoLink,
              descriptionOfProject,
              codeLink,
              videoLink,
              projectLink,
            }) => {
              return (
                <ProjectsCards
                  key={id}
                  name={name}
                  projectPhoto={photoLink}
                  video={videoLink}
                  description={descriptionOfProject}
                  code={codeLink}
                  project={projectLink}
                  className="card"
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
