import "./Projects.css"
import { ProjectItem } from "../../components/index";
import game_03 from "../../assets/game-03.jpg";
import { projectsList } from "../../helpers/ProjectsList";

const Projects = () => {
  return (
    <div className="projects">
      <h1>My personal Projects</h1>
      <div className="projectsList">
      <ProjectItem name="Social Media Website"  image={game_03}/>
      <ProjectItem name="Social Media Website"  image={game_03}/>
      <ProjectItem name="Social Media Website"  image={game_03}/>

      
      </div>
    </div>
  )
}

export default Projects;