import "./Projects.css"
import { ProjectItem } from "../../components/index";
import pro_01 from "../../assets/images/pro_01"

const Projects = () => {
  return (
    <div className="projects">
      <h1>My personal Projects</h1>
      <div className="projectsList">
      <ProjectItem name="Social Media Website" image={pro_01} />
      <ProjectItem/>

      
      </div>
    </div>
  )
}

export default Projects;