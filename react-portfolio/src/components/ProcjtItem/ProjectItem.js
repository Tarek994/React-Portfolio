import "./ProjectItem.css"


const ProjectItem = ({image, name}) => {
  return (
    <div className="ProjectItem">
      <img className="bgImage" src={image} alt="k"/>
        {/* <div className='bgImage' style={{backgroundImage: `url(${image})`}}/> */}
        <h1><a href="/#">{name} </a></h1>
    </div>
  )
}

export default ProjectItem

