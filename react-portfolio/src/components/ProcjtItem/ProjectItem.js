import "./ProjectItem.css"
import { useNavigate } from "react-router-dom"


const ProjectItem = ({image, name,id}) => {
  const navigate = useNavigate();

  return (
    <div  className="ProjectItem" onClick={()=>{
      navigate(`/project/` + id)}}>
        <img alt="" className='bgImage' src={image}/>
        <h1>{name}</h1>
    </div>
  )
}

export default ProjectItem

