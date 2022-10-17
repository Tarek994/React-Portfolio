import "./Projects.css"
import { ProjectItem } from "../../components/index";
import proimg from "../../assets/images/pro1";


const Projects = () => {
  return (
    <div className="projects">
      <h1>My personal Projects</h1>
      <div className="projectsList">
      <ProjectItem name="Social Media Website"  image={proimg}/>
      <ProjectItem/>

      
      </div>
    </div>
  )
}

export default Projects;