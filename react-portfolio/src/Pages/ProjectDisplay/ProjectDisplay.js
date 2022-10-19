import "./ProjectDisplay.css"
import { useParams } from "react-router-dom"
import { ProjectsList } from "../../helpers/ProjectsList";
import { GitHub } from "@mui/icons-material";



const ProjectDisplay = () => {

    const {id} = useParams();
    const project = ProjectsList[id];


  return (
    <div className="project">
        <h1>{project.name}</h1>
        <img src={project.image} alt=""/>
        <GitHub/>
    </div>
  )
}

export default ProjectDisplay