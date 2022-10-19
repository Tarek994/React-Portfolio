import "./ProjectDisplay.css"
import { useParams } from "react-router-dom"
import { ProjectsList } from "../../helpers/ProjectsList";
import { GitHub } from "@mui/icons-material";
import { margin } from "@mui/system";



const ProjectDisplay = () => {

    const {id} = useParams();
    const project = ProjectsList[id];
    const style = {fontSize:"70px" }


  return (
    <div className="project">
        <h1>{project.name}</h1>
        <img src={project.image} alt=""/>
        <br/><div className="gh-icons">
          <p>{project.skills}</p>
             <a href="https://github.com/Tarek994"><GitHub style={style}/>
             </a> 
            </div>
    </div>
  )
}

export default ProjectDisplay