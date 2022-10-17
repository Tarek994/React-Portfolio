import "./Projects.css"
import { ProjectItem } from "../../components/index";


const Projects = () => {
  return (
    <div className="projects">
      <h1>My personal Projects</h1>
      <div className="projectsList">
      <ProjectItem name="Social Media Website"  />
      <ProjectItem/>

      
      </div>
    </div>
  )
}

export default Projects;