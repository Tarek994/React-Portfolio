import "./Projects.css"
import { ProjectItem } from "../../components/index";
import { ProjectsList } from "../../helpers/ProjectsList";

const Projects = () => {
  return (
    <div className="projects">
      <h1>My personal Projects</h1>
      <div className="projectsList">
      {ProjectsList.map((project, idx) =>{

        return <ProjectItem
                  
                  id={idx}
                  name={project.name}
                  image={project.image} />
              })}
      </div>
    </div>
  )
}

export default Projects;