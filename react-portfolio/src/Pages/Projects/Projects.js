import "./Projects.css"
import { ProjectItem } from "../../components/index";
import { projectsList } from "../../helpers/ProjectsList";

const Projects = () => {
  return (
    <div className="projects">
      <h1>My personal Projects</h1>
      <div className="projectsList">
      {projectsList.map((project) =>{
        return <ProjectItem
                  name={project.name}
                  image={project.image} />
      })}

      
      </div>
    </div>
  )
}

export default Projects;