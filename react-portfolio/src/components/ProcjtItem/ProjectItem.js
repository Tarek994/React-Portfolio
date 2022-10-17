import "./ProjectItem.css"


const ProjectItem = ({image, name}) => {
  return (
    <div className="ProjectItem">
        <div className='bgImage' />
        <h1>{name} </h1>
    </div>
  )
}

export default ProjectItem

// style={{backgroundImage: `url(${image})`}}